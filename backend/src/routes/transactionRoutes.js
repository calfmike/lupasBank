const express = require('express');
const { createTransaction, getTransactionsByAccount, createCreditNote, createDebitNote } = require('../controllers/transactionController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Rutas protegidas por autenticación
router.post('/', auth, createTransaction); // Crear una nueva transacción
router.get('/account/:accountIdentifier', auth, getTransactionsByAccount); // Obtener transacciones por cuenta
router.post('/credit', auth, createCreditNote); // Crear una nota de crédito
router.post('/debit', auth, createDebitNote); // Crear una nota de débito

module.exports = router;
