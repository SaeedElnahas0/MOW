const express = require('express');
const router = express.Router();
const auth = require('../middleware/authentication')
const {
    register,
    login,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/', auth, getAllUsers);
router.get('/:id', auth, getSingleUser);
router.patch('/updateuser/:id', auth, updateUser);
//router.patch('/updatepassword/:id', updateUserPassword);
router.delete('/:id', auth, deleteUser);


module.exports = router;