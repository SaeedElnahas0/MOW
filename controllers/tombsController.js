const Tombs = require('../models/Tomb');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createTomb = async (req, res) => {
    const tombs = await Tombs.create(req.body);
    res.status(StatusCodes.CREATED).json({ tombs });
};

const getAllTombs = async (req, res) => {
    const { name, location } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (location) {
        queryObject.location = { $regex: location, $options: 'i' };;
    }
    let result = Tombs.find(queryObject);
    const tombs = await result;
    res.status(StatusCodes.OK).json({ count: tombs.length, tombs });
};

const getSingleTomb = async (req, res) => {
    const tombs = await Tombs.findOne({ _id: req.params.id });
    if (!tombs) {
        throw new CustomError.NotFoundError(`No Tombs with id : ${tombsId}`);
    }
    res.status(StatusCodes.OK).json({ tombs });
};

const updateTomb = async (req, res) => {
    const tombs = await Tombs.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!tombs) {
        throw new CustomError.NotFoundError(`No tombs with id : ${tombsId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Tomb updated.', tombs });
};

const deleteTomb = async (req, res) => {
    const tombs = await Tombs.findOne({ _id: req.params.id });
    if (!tombs) {
        throw new CustomError.NotFoundError(`No tombs with id : ${tombsId}`);
    }
    await tombs.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Tomb removed.' });
};

module.exports = {
    createTomb,
    getAllTombs,
    getSingleTomb,
    updateTomb,
    deleteTomb
}