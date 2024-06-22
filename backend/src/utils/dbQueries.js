const User = require('../models/User');
const Account = require('../models/Account');
const Admin = require('../models/Admin');  // Asegúrate de importar el modelo Admin
const Transaction = require('../models/Transaction');

async function findUserByEmail(email) {
    return User.findOne({ email });
}

async function findUserById(id) {
    return User.findById(id);
}

async function updateUser(user) {
    return user.save();
}

async function createAccount(accountData) {
    const account = new Account(accountData);
    return account.save();
}

async function findAccountByIdentifier(identifier) {
    return Account.findOne({
        $or: [{ cbu: identifier }, { alias: identifier }]
    });
}

async function createTransaction(transactionData) {
    const transaction = new Transaction(transactionData);
    return transaction.save();
}

async function getTransactionsByAccountId(accountId) {
    return Transaction.find({
        $or: [{ fromAccount: accountId }, { toAccount: accountId }]
    });
}

async function findAdminByUsername(username) {
    return Admin.findOne({ username });
}

async function findAllUsers() {
    return User.find();
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
