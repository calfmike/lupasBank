const Admin = require('../models/Admin');  // Asegúrate de importar el modelo Admin
const dbQueries = require('../utils/dbQueries');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = new Admin({ username, password });
        await admin.save();
        res.status(201).json({ msg: 'Admin registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await dbQueries.findAdminByUsername(username);
        if (!admin) {
            return res.status(404).json({ msg: 'Admin not found' });
        }
        const isMatch = await admin.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await dbQueries.findAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.approveUser = async (req, res) => {
    try {
        const user = await dbQueries.findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.onboardingStatus = 'approved';
        await dbQueries.updateUser(user);

        res.status(200).json({ msg: 'User approved', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.rejectUser = async (req, res) => {
    try {
        const user = await dbQueries.findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.onboardingStatus = 'rejected';
        await dbQueries.updateUser(user);

        res.status(200).json({ msg: 'User rejected', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await dbQueries.findUserById(req.params.userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.email = req.body.email;
        await dbQueries.updateUser(user);

        res.status(200).json({ msg: 'User updated', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};
