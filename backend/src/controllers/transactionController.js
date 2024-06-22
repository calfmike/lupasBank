const dbQueries = require('../utils/dbQueries');

exports.createTransaction = async (req, res) => {
    const { fromAccountIdentifier, toAccountIdentifier, amount, reason } = req.body;

    try {
        const fromAcc = await dbQueries.findAccountByIdentifier(fromAccountIdentifier);
        const toAcc = await dbQueries.findAccountByIdentifier(toAccountIdentifier);

        if (!fromAcc || !toAcc) {
            return res.status(404).json({ msg: 'One or both accounts not found' });
        }

        if (fromAcc.balance < amount) {
            return res.status(400).json({ msg: 'Insufficient funds' });
        }

        fromAcc.balance -= amount;
        toAcc.balance += amount;

        await dbQueries.updateUser(fromAcc);
        await dbQueries.updateUser(toAcc);

        const newTransaction = await dbQueries.createTransaction({
            fromAccount: fromAcc._id,
            toAccount: toAcc._id,
            amount,
            reason: reason || 'internalTransfer',
            status: 'completed'
        });

        res.status(201).json({ msg: 'Transaction completed successfully', transaction: newTransaction });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactionsByAccount = async (req, res) => {
    try {
        const account = await dbQueries.findAccountByIdentifier(req.params.accountIdentifier);
        if (!account) return res.status(404).json({ msg: 'Account not found' });

        const transactions = await dbQueries.getTransactionsByAccountId(account._id);
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCreditNote = async (req, res) => {
    const { accountIdentifier, amount } = req.body;

    try {
        const account = await dbQueries.findAccountByIdentifier(accountIdentifier);
        if (!account) return res.status(404).json({ msg: 'Account not found' });

        account.balance += amount;
        await dbQueries.updateUser(account);

        const newTransaction = await dbQueries.createTransaction({
            fromAccount: null,
            toAccount: account._id,
            amount,
            reason: 'creditNote',
            status: 'completed'
        });

        res.status(201).json({ msg: 'Credit note created successfully', transaction: newTransaction });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createDebitNote = async (req, res) => {
    const { accountIdentifier, amount } = req.body;

    try {
        const account = await dbQueries.findAccountByIdentifier(accountIdentifier);
        if (!account) return res.status(404).json({ msg: 'Account not found' });

        if (account.balance < amount) {
            return res.status(400).json({ msg: 'Insufficient funds' });
        }

        account.balance -= amount;
        await dbQueries.updateUser(account);

        const newTransaction = await dbQueries.createTransaction({
            fromAccount: account._id,
            toAccount: null,
            amount,
            reason: 'debitNote',
            status: 'completed'
        });

        res.status(201).json({ msg: 'Debit note created successfully', transaction: newTransaction });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
