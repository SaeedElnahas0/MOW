const HistoricalLocation = require('../models/HistoricalLocation');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createHistoricalLocation = async (req, res) => {
    const historicalLocation = await HistoricalLocation.create(req.body);
    res.status(StatusCodes.CREATED).json({ historicalLocation });
};

const getAllHistoricalLocation = async (req, res) => {
    const { name } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    let result = HistoricalLocation.find(queryObject);
    const historicalLocation = await result;
    res.status(StatusCodes.OK).json({ count: historicalLocation.length, historicalLocation });
};

const getSingleHistoricalLocation = async (req, res) => {
    const historicalLocation = await HistoricalLocation.findOne({ _id: req.params.id });
    if (!historicalLocation) {
        throw new CustomError.NotFoundError(`No Historical Location with id : ${historicalLocationId}`);
    }
    res.status(StatusCodes.OK).json({ historicalLocation });
};

const updateHistoricalLocation = async (req, res) => {
    const historicalLocation = await HistoricalLocation.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!historicalLocation) {
        throw new CustomError.NotFoundError(`No Historical Location with id : ${historicalLocationId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Historical Location updated.', historicalLocation });
};

const deleteHistoricalLocation = async (req, res) => {
    const historicalLocation = await HistoricalLocation.findOne({ _id: req.params.id });
    if (!historicalLocation) {
        throw new CustomError.NotFoundError(`No Historical Location with id : ${historicalLocationId}`);
    }
    await historicalLocation.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Historical Location removed.' });
};

module.exports = {
    createHistoricalLocation,
    getAllHistoricalLocation,
    getSingleHistoricalLocation,
    updateHistoricalLocation,
    deleteHistoricalLocation
}



