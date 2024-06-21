const Account = require('../models/Account');
const { generateAccountDetails } = require('../utils/accountUtils');

// Obtener todas las cuentas
exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener cuentas por userId
exports.getAccountsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const accounts = await Account.find({ userId });
        if (!accounts) return res.status(404).json({ msg: 'No accounts found for this user' });
        res.json(accounts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear una nueva cuenta
exports.createAccount = async (req, res) => {
    const { userId, accountType, alias } = req.body;

    try {
        // Validate account type
        const validAccountTypes = ['savings', 'checking'];
        if (!validAccountTypes.includes(accountType)) {
            return res.status(400).json({ msg: 'Invalid account type' });
        }

        // Generate account number and CBU for the user
        const { accountNumber, cbu } = await generateAccountDetails(accountType);

        // Create a new account associated with the user
        const newAccount = new Account({
            userId,
            accountType,
            alias,
            accountNumber,
            cbu
        });

        await newAccount.save();

        res.status(201).json({ msg: 'Account created successfully', account: newAccount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
