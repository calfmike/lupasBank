const express = require('express');
const { getAllAccounts, getAccountsByUserId, createAccount } = require('../controllers/accountController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Rutas protegidas por autenticación
router.get('/', auth, getAllAccounts); // Obtener todas las cuentas
router.get('/user/:userId', auth, getAccountsByUserId); // Obtener cuentas por userId
router.post('/', auth, createAccount); // Crear una nueva cuenta

module.exports = router;
