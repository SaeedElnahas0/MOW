const User = require('../models/User');
//library for status code
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

//signup
const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { id: user._id, name: user.name, email: user.email }, token })
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
    res.status(StatusCodes.OK).json({ user: { id: user._id, name: user.name, email: user.email }, token })
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
    const { email, name, oldPassword, newPassword } = req.body;
    if (!email || !name || !oldPassword || !newPassword) {
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

    await user.save();

    const token = user.createJWT(user);
    res.status(StatusCodes.OK).json({ user: { id: user._id, name: user.name, email: user.email }, token });
};

//updata password
// const updateUserPassword = async (req, res) => {
//     const { oldPassword, newPassword } = req.body;
//     if (!oldPassword || !newPassword) {
//         throw new CustomError.BadRequestError('Please provide both values');
//     }
//     const user = await User.findOne({ _id: req.params.id });

//     const isPasswordCorrect = await user.comparePassword(oldPassword);
//     if (!isPasswordCorrect) {
//         throw new CustomError.UnauthenticatedError('Invalid Credentials');
//     }
//     user.password = newPassword;

//     await user.save();
//     res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
// };

//delete user
const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(StatusCodes.CREATED).json({ msg: 'Success! User Deleted.' })
}

module.exports = {
    register,
    login,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}