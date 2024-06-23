const User = require('../models/User');
const Account = require('../models/Account');
const Admin = require('../models/Admin');  // Asegúrate de importar el modelo Admin
const Transaction = require('../models/Transaction');

async function findUserByEmail(email) {
    return User.findOne({ email: sanitize(email) });
}

async function findUserById(id) {
    return User.findById(sanitize(id));
}

async function updateUser(user) {
    return user.save();
}

async function createAccount(accountData) {
    const account = new Account(sanitize(accountData));
    return account.save();
}

async function findAccountByIdentifier(identifier) {
    return Account.findOne({
        $or: [{ cbu: sanitize(identifier) }, { alias: sanitize(identifier) }]
    });
}

async function createTransaction(transactionData) {
    const transaction = new Transaction(sanitize(transactionData));
    return transaction.save();
}

async function getTransactionsByAccountId(accountId) {
    return Transaction.find({
        $or: [{ fromAccount: sanitize(accountId) }, { toAccount: sanitize(accountId) }]
    });
}

async function findAdminByUsername(username) {
    return Admin.findOne({ username: sanitize(username) });
}

async function findAllUsers() {
    return User.find();
}

function sanitize(input) {
    if (typeof input === 'string') {
        return input.replace(/[^\w\s.-_@]/gi, ''); // Limpiar cadena de caracteres especiales
    }
    if (typeof input === 'object' && input !== null) {
        return Object.keys(input).reduce((acc, key) => {
            acc[key] = sanitize(input[key]);
            return acc;
        }, {});
    }
    return input;
}

module.exports = {
    findUserByEmail,
    findUserById,
    updateUser,
    createAccount,
    findAccountByIdentifier,
    createTransaction,
    getTransactionsByAccountId,
    findAdminByUsername,
    findAllUsers
};
