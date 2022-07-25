const User = require('../models/User');
//library for status code
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

//signup register
const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ 
        user: { 
            id: user._id, 
            name: user.name, 
            email: user.email, 
            age: user.age, 
            country: user.country, 
            gender: user.gender, 
            job: user.job, 
            mobile: user.mobile, 
            address: user.address,
            role: user.role,
            profilePic: user.profilePic 
        }, token 
    })
}

//signin / login
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({ email })
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({
        user: { 
            id: user._id, 
            name: user.name, 
            email: user.email, 
            age: user.age, 
            country: user.country, 
            gender: user.gender, 
            job: user.job, 
            mobile: user.mobile, 
            address: user.address,
            role: user.role,
            profilePic: user.profilePic
        }, token 
    })
}

//get all user 
const getAllUsers = async (req, res) => {
    const users = await User.find({ role: 'user' });
    res.status(StatusCodes.OK).json({ count: users.length, users });
};

//get single user by id
const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
        throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
    }
    res.status(StatusCodes.OK).json({ user });
};

//updata user name
const updateUser = async (req, res) => {
    const { email, name, oldPassword, newPassword, age, country, gender, job, mobile, address } = req.body;
    if (!email || !name || !oldPassword || !newPassword || !age || !country || !gender || !job || !mobile || !address) {
        throw new CustomError.BadRequestError('Please provide all values');
    }
    const user = await User.findOne({ _id: req.params.id });

    const isPasswordCorrect = await user.comparePassword(oldPassword);
    if (!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    user.email = email;
    user.name = name;
    user.password = newPassword;
    user.age = age;
    user.country = country;
    user.gender = gender;
    user.job = job;
    user.mobile = mobile;
    user.address = address;

    await user.save();

    const token = user.createJWT(user);
    res.status(StatusCodes.OK).json({
        user: { 
            id: user._id, 
            name: user.name, 
            email: user.email, 
            age: user.age, 
            country: user.country, 
            gender: user.gender, 
            job: user.job, 
            mobile: user.mobile,
            address: user.address 
        }, token 
    })
};

//delete user
const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(StatusCodes.OK).json({ msg: 'Success! User Deleted.' })
}

//forget password
const forgetPassword = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(200).json({ msg: "User Not Found" });
    res.status(StatusCodes.OK).json({ msg: 'Success!' })
};

//reset password
const resetPassword = async (req, res) => {
    const { newPassword, confirmPassword, email} = req.body;
    if (!newPassword || !confirmPassword ) {
        throw new CustomError.BadRequestError('Please provide all values');
    }
    const user = await User.findOne({ email });
  
    if (req.body.newPassword !== req.body.confirmPassword) {
      return res
        .status(400)
        .json({ msg: "Password Must be Match ConfirmPassword" });
    }
    user.password = newPassword;
    await user.save();
    res.status(StatusCodes.OK).json({msg: 'password reset success'})
};

module.exports = {
    register,
    login,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    forgetPassword,
    resetPassword
}