const Visited = require('../models/Visited');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createVisited = async (req, res) => {
    const visited = await Visited.create(req.body)
    res.status(StatusCodes.CREATED).json({ visited })
}

const getAllVisited = async (req, res) => {
    const visited = await Visited.find({});
    res.status(StatusCodes.OK).json({ count: visited.length, visited });
};

const getSingleVisited = async (req, res) => {
    const visited = await Visited.findOne({ _id: req.params.id });
    if (!visited) {
        throw new CustomError.NotFoundError(`No will visit with id : ${visited}`);
    }
    res.status(StatusCodes.OK).json({ visited });
};

module.exports = {
    createVisited,
    getAllVisited,
    getSingleVisited
}