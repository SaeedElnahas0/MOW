const SunkenMonument = require('../models/SunkenMonuments');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createSunkenMonument = async (req, res) => {
    const sunkenMonument = await SunkenMonument.create(req.body)
    res.status(StatusCodes.CREATED).json({ sunkenMonument })
}

const getAllSunkenMonuments = async (req, res) => {
    const sunkenMonuments = await SunkenMonument.find({});
    res.status(StatusCodes.OK).json({ count: sunkenMonuments.length, sunkenMonuments });
};

const getSingleSunkenMonument = async (req, res) => {
    const sunkenMonument = await SunkenMonument.findOne({ _id: req.params.id });
    if (!sunkenMonument) {
        throw new CustomError.NotFoundError(`No sunken monument with id : ${sunkenMonumentId}`);
    }
    res.status(StatusCodes.OK).json({ sunkenMonument });
};

const updateSunkenMonument = async (req, res) => {
    const sunkenMonument = await SunkenMonument.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!sunkenMonument) {
        throw new CustomError.NotFoundError(`No sunken monument with id : ${sunkenMonumentId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Sunken Monument updated.', sunkenMonument });
};

const deleteSunkenMonument = async (req, res) => {
    const sunkenMonument = await SunkenMonument.findOne({ _id: req.params.id });
    if (!sunkenMonument) {
        throw new CustomError.NotFoundError(`No sunken monument with id : ${sunkenMonumentId}`);
    }
    await sunkenMonument.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Sunken Monument removed.' });
};

module.exports = {
    createSunkenMonument,
    getAllSunkenMonuments,
    getSingleSunkenMonument,
    updateSunkenMonument,
    deleteSunkenMonument
}