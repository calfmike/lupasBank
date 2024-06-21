const Admin = require('../models/Admin');
const User = require('../models/User');
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
        const admin = await Admin.findOne({ username });
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
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.approveUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.onboardingStatus = 'approved';
        await user.save();

        res.status(200).json({ msg: 'User approved', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.rejectUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.onboardingStatus = 'rejected';
        await user.save();

        res.status(200).json({ msg: 'User rejected', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { email } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.email = email;
        await user.save();

        res.status(200).json({ msg: 'User updated', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};
