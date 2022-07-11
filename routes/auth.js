const express = require('express');
const router = express.Router();
const { 
    register, 
    login, 
    getAllUsers, 
    getSingleUser, 
    updateUser,
    deleteUser,
    forgetPassword,
    resetPassword
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.patch('/updateuser/:id',updateUser);
router.delete('/:id', deleteUser);
router.post('/forgetpassword',  forgetPassword);
router.patch('/resetpassword',  resetPassword);

module.exports = router;