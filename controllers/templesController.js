const Temples = require('../models/Temples');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createTemples = async (req, res) => {
    const temples = await Temples.create(req.body);
    res.status(StatusCodes.CREATED).json({ temples });
};

const getAllTemples = async (req, res) => {
    const { name, location } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (location) {
        queryObject.location = { $regex: location, $options: 'i' };;
    }
    let result = Temples.find(queryObject);
    const temples = await result;
    res.status(StatusCodes.OK).json({ count: temples.length, temples });
};

const getSingleTemple = async (req, res) => {
    const temples = await Temples.findOne({ _id: req.params.id });
    if (!temples) {
        throw new CustomError.NotFoundError(`No temples with id : ${templesId}`);
    }
    res.status(StatusCodes.OK).json({ temples });
};

const updateTemples = async (req, res) => {
    const temples = await Temples.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!temples) {
        throw new CustomError.NotFoundError(`No temples with id : ${TemplesId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Temple updated.', temples });
};

const deleteTemple = async (req, res) => {
    const temples = await Temples.findOne({ _id: req.params.id });
    if (!temples) {
        throw new CustomError.NotFoundError(`No Temples with id : ${templesId}`);
    }
    await temples.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! temple removed.' });
};

module.exports = {
    createTemples,
    getAllTemples,
    getSingleTemple,
    updateTemples,
    deleteTemple
}