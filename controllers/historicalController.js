const Historical = require('../models/Historical');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createHistorical = async (req, res) => {
    const historical = await Historical.create(req.body)
    res.status(StatusCodes.CREATED).json({ historical })
}

const getAllHistoricals = async (req, res) => {
    const historicals = await Historical.find({});
    res.status(StatusCodes.OK).json({ count: historicals.length, historicals });
};

const getSingleHistorical = async (req, res) => {
    const historical = await Historical.findOne({ _id: req.params.id });
    if (!historical) {
        throw new CustomError.NotFoundError(`No historical with id : ${historicalId}`);
    }
    res.status(StatusCodes.OK).json({ historical });
};

const updateHistorical = async (req, res) => {
    const historical = await Historical.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!historical) {
        throw new CustomError.NotFoundError(`No historical with id : ${historicalId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Historical updated.', historical });
};

const deleteHistorical = async (req, res) => {
    const historical = await Historical.findOne({ _id: req.params.id });
    if (!historical) {
        throw new CustomError.NotFoundError(`No historical with id : ${historicalId}`);
    }
    await historical.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Historical removed.' });
};

module.exports = {
    createHistorical,
    getAllHistoricals,
    getSingleHistorical,
    updateHistorical,
    deleteHistorical
}
