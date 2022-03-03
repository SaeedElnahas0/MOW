const express = require('express');
const multer = require('multer');
const router = express.Router();
const { 
    register, 
    login, 
    getAllUsers, 
    getSingleUser, 
    updateUser, 
    updatePhoto,
    deleteUser 
} = require('../controllers/authController');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './profileImage')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toDateString()+file.originalname) // بيحط التاريخ واسم الفايل ال فيه الصوره      
    }
});

const upload = multer({
    storage: storage
});

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.patch('/updateuser/:id',updateUser);
router.patch('/updatephoto/:id', upload.single('myfile'),updatePhoto);
//router.patch('/updatepassword/:id', updateUserPassword);
router.delete('/:id', deleteUser);


module.exports = router;