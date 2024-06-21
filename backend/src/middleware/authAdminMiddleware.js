const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const authAdmin = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }

        const token = authHeader.replace('Bearer ', '');
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ msg: 'Invalid token' });
        }

        const admin = await Admin.findById(decoded.id);
        if (!admin || admin.role !== 'admin') {
            return res.status(403).json({ msg: 'User not authorized as admin' });
        }

        req.user = admin;
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

module.exports = authAdmin;
