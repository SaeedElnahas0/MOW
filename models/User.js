const mongoose = require('mongoose');
const validator = require('validator'); // handle input data validation
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    age: {
        type: String,
        required: [true, 'Please provide age']
    },
    country: {
        type: String,
        required: [true, 'Please provide country']
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    job: {
        type: String,
        required: [true, 'Please provide job']
    },
    mobile: {
        type: String,
        required: [true, 'Please provide mobile']
    },
    address: {
        type: String,
        required: [true, 'Please provide address']
    },
    profilePic: {
        type: String,
        enum: ['https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='],
        default: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=',
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});

//pre middleware executed one after another when each middleware calls
userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
//token
userSchema.methods.createJWT = function () {
    return jwt.sign(
        { userId: this._id, name: this.name },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
}
//compare password
userSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
}


module.exports = mongoose.model('User', userSchema);  
