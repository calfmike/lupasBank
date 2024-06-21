const Counter = require('../models/Counter');

const generateAccountDetails = async (accountType) => {
    // Validate account type
    const validAccountTypes = ['savings', 'checking'];
    if (!validAccountTypes.includes(accountType)) {
        throw new Error('Invalid account type');
    }

    // Generate account number for the user
    const accountPrefix = accountType === 'savings' ? '1000' : '1001';

    const counter = await Counter.findOneAndUpdate(
        { accountType },
        { $inc: { sequenceValue: 1 } },
        { new: true, upsert: true }
    );

    const accountNumberSequence = counter.sequenceValue.toString().padStart(12, '0');
    const accountNumber = `${accountPrefix}${accountNumberSequence}`;

    // Generate CBU for the user
    const cbuSequence = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
    const cbu = `${accountPrefix}${cbuSequence}`;

    return { accountNumber, cbu };
};

module.exports = { generateAccountDetails };
