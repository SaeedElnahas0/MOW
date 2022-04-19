const Museum = require('../models/Museum');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createMuseum = async (req, res) => {
    const museum = await Museum.create(req.body);
    res.status(StatusCodes.CREATED).json({ museum });
};

const getAllMuseums = async (req, res) => {
    // const museums = await Museum.find({});
    // res.status(StatusCodes.OK).json({ count: museums.length, museums });
    const { name, location } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (location) {
    queryObject.location = { $regex: location, $options: 'i' };;
    }
    let result = Museum.find(queryObject);
    const museums = await result;
    res.status(StatusCodes.OK).json({ count: museums.length, museums });
};

const getSingleMuseum = async (req, res) => {
    const museum = await Museum.findOne({ _id: req.params.id });
    if (!museum) {
        throw new CustomError.NotFoundError(`No museum with id : ${museumId}`);
    }
    res.status(StatusCodes.OK).json({ museum });
};

const updateMuseum = async (req, res) => {
    const museum = await Museum.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!museum) {
        throw new CustomError.NotFoundError(`No museum with id : ${museumId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Museum updated.', museum });
};

const deleteMuseum = async (req, res) => {
    const museum = await Museum.findOne({ _id: req.params.id });
    if (!museum) {
        throw new CustomError.NotFoundError(`No museum with id : ${museumId}`);
    }
    await museum.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Museum removed.' });
};

module.exports = {
    createMuseum,
    getAllMuseums,
    getSingleMuseum,
    updateMuseum,
    deleteMuseum
}
