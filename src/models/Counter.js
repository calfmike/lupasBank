const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    accountType: { type: String, required: true, unique: true },
    sequenceValue: { type: Number, default: 1 }
});

module.exports = mongoose.model('Counter', CounterSchema);
