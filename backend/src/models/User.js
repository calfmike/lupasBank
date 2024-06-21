const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    securityImage: { type: String },
    role: { type: String, default: 'user' },
    onboardingStatus: { type: String, default: 'pending' }, // pending, approved, rejected
    riskLevel: { type: String, default: 'low' }, // low, medium, high
    riskScore: { type: Number, default: 0 },
    enrollmentPending: { type: Boolean, default: true } // true si el enrolamiento no se ha completado
});

module.exports = mongoose.model('User', UserSchema);
