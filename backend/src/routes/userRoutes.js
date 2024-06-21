const express = require('express');
const { registerUser, loginUser, enrollUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);

// Ruta para iniciar sesión
router.post('/login', loginUser);

// Ruta para el enrolamiento del usuario (protegida)
router.post('/enroll', auth, enrollUser);

module.exports = router;
