const Transaction = require('../models/Transaction');
const Account = require('../models/Account');

exports.createTransaction = async (req, res) => {
    const { fromAccountIdentifier, toAccountIdentifier, amount, reason } = req.body;

    try {
        const fromAcc = await Account.findOne({
            $or: [{ cbu: fromAccountIdentifier }, { alias: fromAccountIdentifier }]
        });
        const toAcc = await Account.findOne({
            $or: [{ cbu: toAccountIdentifier }, { alias: toAccountIdentifier }]
        });

        if (!fromAcc || !toAcc) {
            return res.status(404).json({ msg: 'One or both accounts not found' });
        }

        if (fromAcc.balance < amount) {
            return res.status(400).json({ msg: 'Insufficient funds' });
        }

        fromAcc.balance -= amount;
        toAcc.balance += amount;

        await fromAcc.save();
        await toAcc.save();

        const newTransaction = new Transaction({
            fromAccount: fromAcc._id,
            toAccount: toAcc._id,
            amount,
            reason: reason || 'internalTransfer',
            status: 'completed'
        });

        await newTransaction.save();

        res.status(201).json({ msg: 'Transaction completed successfully', transaction: newTransaction });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactionsByAccount = async (req, res) => {
    const { accountIdentifier } = req.params;

    try {
        const account = await Account.findOne({
            $or: [{ cbu: accountIdentifier }, { alias: accountIdentifier }]
        });

        if (!account) return res.status(404).json({ msg: 'Account not found' });

        const transactions = await Transaction.find({
            $or: [{ fromAccount: account._id }, { toAccount: account._id }]
        });

        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCreditNote = async (req, res) => {
    const { accountIdentifier, amount } = req.body;

    try {
        const account = await Account.findOne({
            $or: [{ cbu: accountIdentifier }, { alias: accountIdentifier }]
        });

        if (!account) return res.status(404).json({ msg: 'Account not found' });

        account.balance += amount;

        await account.save();

        const newTransaction = new Transaction({
            fromAccount: null,
            toAccount: account._id,
            amount,
            reason: 'creditNote',
            status: 'completed'
        });

        await newTransaction.save();

        res.status(201).json({ msg: 'Credit note created successfully', transaction: newTransaction });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createDebitNote = async (req, res) => {
    const { accountIdentifier, amount } = req.body;

    try {
        const account = await Account.findOne({
            $or: [{ cbu: accountIdentifier }, { alias: accountIdentifier }]
        });

        if (!account) return res.status(404).json({ msg: 'Account not found' });

        if (account.balance < amount) {
            return res.status(400).json({ msg: 'Insufficient funds' });
        }

        account.balance -= amount;

        await account.save();

        const newTransaction = new Transaction({
            fromAccount: account._id,
            toAccount: null,
            amount,
            reason: 'debitNote',
            status: 'completed'
        });

        await newTransaction.save();

        res.status(201).json({ msg: 'Debit note created successfully', transaction: newTransaction });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
