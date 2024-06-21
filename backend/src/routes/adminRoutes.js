const express = require('express');
const { registerAdmin, loginAdmin, getAllUsers } = require('../controllers/adminController');
const authAdmin = require('../middleware/authAdminMiddleware');

const router = express.Router();

router.post('/register', registerAdmin); // Registrar nuevo admin
router.post('/login', loginAdmin); // Login admin
router.get('/users', authAdmin, getAllUsers); // Obtener todos los usuarios, protegido por authAdmin

module.exports = router;
