const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    fromAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    toAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' }, // pending, completed, failed
    reason: { type: String, required: true } // internalTransfer, creditNote, debitNote
});

module.exports = mongoose.model('Transaction', TransactionSchema);
