const WillVisit = require('../models/WillVisit');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createWillVisit = async (req, res) => {
    const willVisit = await WillVisit.create(req.body)
    res.status(StatusCodes.CREATED).json({ willVisit })
}

const getAllWillVisit = async (req, res) => {
    const willVisit = await WillVisit.find({});
    res.status(StatusCodes.OK).json({ count: willVisit.length, willVisit });
};

const getSingleWillVisit = async (req, res) => {
    const willVisit = await WillVisit.findOne({ _id: req.params.id });
    if (!willVisit) {
        throw new CustomError.NotFoundError(`No will visit with id : ${willVisit}`);
    }
    res.status(StatusCodes.OK).json({ willVisit });
};

// const updateSunkenMonument = async (req, res) => {
//     const sunkenMonument = await SunkenMonument.findOneAndUpdate({ _id: req.params.id }, req.body, {
//         new: true,
//         runValidators: true,
//     });
//     if (!sunkenMonument) {
//         throw new CustomError.NotFoundError(`No sunken monument with id : ${sunkenMonumentId}`);
//     }
//     res.status(StatusCodes.OK).json({ msg: 'Success! Sunken Monument updated.', sunkenMonument });
// };

// const deleteSunkenMonument = async (req, res) => {
//     const sunkenMonument = await SunkenMonument.findOne({ _id: req.params.id });
//     if (!sunkenMonument) {
//         throw new CustomError.NotFoundError(`No sunken monument with id : ${sunkenMonumentId}`);
//     }
//     await sunkenMonument.remove();
//     res.status(StatusCodes.OK).json({ msg: 'Success! Sunken Monument removed.' });
// };

module.exports = {
    createWillVisit,
    getAllWillVisit,
    getSingleWillVisit
}