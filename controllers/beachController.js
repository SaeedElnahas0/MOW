const Beach = require('../models/Beach');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createBeach = async (req, res) => {
    const beach = await Beach.create(req.body);
    res.status(StatusCodes.CREATED).json({ beach });
};

const getAllBeachs = async (req, res) => {
    const { name, location } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (location) {
    queryObject.location = { $regex: location, $options: 'i' };;
    }
    let result = Beach.find(queryObject);
    const beach = await result;
    res.status(StatusCodes.OK).json({ count: beach.length, beach });
};

const getSingleBeach = async (req, res) => {
    const beach = await Beach.findOne({ _id: req.params.id });
    if (!beach) {
        throw new CustomError.NotFoundError(`No beach with id : ${beachId}`);
    }
    res.status(StatusCodes.OK).json({ beach });
};

const updateBeach = async (req, res) => {
    const beach = await Beach.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!beach) {
        throw new CustomError.NotFoundError(`No beach with id : ${beachId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! beach updated.', beach });
};

const deleteBeach = async (req, res) => {
    const beach = await Beach.findOne({ _id: req.params.id });
    if (!beach) {
        throw new CustomError.NotFoundError(`No museum with id : ${beachId}`);
    }
    await beach.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! beach removed.' });
};

module.exports = {
    createBeach,
    getAllBeachs,
    getSingleBeach,
    updateBeach,
    deleteBeach
}