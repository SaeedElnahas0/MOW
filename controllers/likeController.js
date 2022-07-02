const Like = require('../models/Like');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createLike = async (req, res) => {
    const like = await Like.create(req.body)
    res.status(StatusCodes.CREATED).json({ like })
}

const getAllLikes = async (req, res) => {
    const like = await Like.find({});
    res.status(StatusCodes.OK).json({ count: like.length, like });
};

// const getSingleVisited = async (req, res) => {
//     const visited = await Visited.findOne({ _id: req.params.id });
//     if (!visited) {
//         throw new CustomError.NotFoundError(`No will visit with id : ${visited}`);
//     }
//     res.status(StatusCodes.OK).json({ visited });
// };

module.exports = {
    createLike,
    getAllLikes
}