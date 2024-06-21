const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    accountType: { 
        type: String, 
        required: true,
        enum: ['savings', 'checking']
    },
    alias: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    cbu: { type: String, required: true, unique: true },
    balance: { type: Number, default: 0 }
});

module.exports = mongoose.model('Account', AccountSchema);
