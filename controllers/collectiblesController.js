const Collectibles = require('../models/Collectibles');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createCollectibles = async (req, res) => {
    const collectibles = await Collectibles.create(req.body)
    res.status(StatusCodes.CREATED).json({ collectibles })
}

const getAllCollectibles = async (req, res) => {
    // const collectibles = await Collectibles.find({});
    // res.status(StatusCodes.OK).json({ count: collectibles.length, collectibles });
    const { name, location } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (location) {
        queryObject.location = { $regex: location, $options: 'i' };;
    }
    let result = Collectibles.find(queryObject);
    const collectibles = await result;
    res.status(StatusCodes.OK).json({ count: collectibles.length, collectibles });
};

const getSingleCollectibles = async (req, res) => {
    const collectibles = await Collectibles.findOne({ _id: req.params.id });
    if (!collectibles) {
        throw new CustomError.NotFoundError(`No collectibles with id : ${collectiblesId}`);
    }
    res.status(StatusCodes.OK).json({ collectibles });
};

const updateCollectibles = async (req, res) => {
    const collectibles = await Collectibles.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!collectibles) {
        throw new CustomError.NotFoundError(`No collectibles with id : ${historicalId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Collectibles updated.', collectibles });
};

const deleteCollectibles = async (req, res) => {
    const collectibles = await Collectibles.findOne({ _id: req.params.id });
    if (!collectibles) {
        throw new CustomError.NotFoundError(`No collectibles with id : ${collectiblesId}`);
    }
    await collectibles.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Collectibles removed.' });
};

module.exports = {
    createCollectibles,
    getAllCollectibles,
    getSingleCollectibles,
    updateCollectibles,
    deleteCollectibles
}
