const Rate = require('../models/Rate');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createRate = async (req, res) => {
    const rate = await Rate.create(req.body);
    res.status(StatusCodes.CREATED).json({ rate });
};

const getAllRates = async (req, res) => {
    const rate = await Rate.find({});
    res.status(StatusCodes.OK).json({ count: rate.length, rate });
};

const getSingleRate = async (req, res) => {
    const rate = await Rate.findOne({ _id: req.params.id });
    if (!rate) {
        throw new CustomError.NotFoundError(`No Rate with id : ${rateId}`);
    }
    res.status(StatusCodes.OK).json({ rate });
};

const updateRate = async (req, res) => {
    const rate = await Rate.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!rate) {
        throw new CustomError.NotFoundError(`No Rate with id : ${rateId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Rate updated.', rate });
};

const deleteRate = async (req, res) => {
    const rate = await Rate.findOne({ _id: req.params.id });
    if (!rate) {
        throw new CustomError.NotFoundError(`No Rate with id : ${rateId}`);
    }
    await rate.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Rate removed.' });
};

module.exports = {
    createRate,
    getAllRates,
    getSingleRate,
    updateRate,
    deleteRate
}