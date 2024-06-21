const express = require('express');
const { registerAdmin, loginAdmin, getAllUsers, approveUser, rejectUser, updateUser } = require('../controllers/adminController');
const authAdmin = require('../middleware/authAdminMiddleware');

const router = express.Router();

router.post('/register', registerAdmin); // Registrar nuevo admin
router.post('/login', loginAdmin); // Login admin
router.get('/users', authAdmin, getAllUsers); // Obtener todos los usuarios, protegido por authAdmin
router.put('/approve/:userId', authAdmin, approveUser); // Aprobar usuario, protegido por authAdmin
router.put('/reject/:userId', authAdmin, rejectUser); // Rechazar usuario, protegido por authAdmin
router.put('/users/:userId', authAdmin, updateUser); // Actualizar usuario, protegido por authAdmin

module.exports = router;
