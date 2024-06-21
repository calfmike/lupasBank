const express = require('express');
const { registerUser, loginUser, enrollUser, getAllUsers } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const authAdmin = require('../middleware/authAdminMiddleware');

const router = express.Router();

router.post('/register', registerUser); // Registrar usuario
router.post('/login', loginUser); // Login usuario
router.post('/enroll', auth, enrollUser); // Enrolar usuario
router.get('/users', authAdmin, getAllUsers); 

module.exports = router;
