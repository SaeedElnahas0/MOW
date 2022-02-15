const WorldHeritage = require('../models/WorldHeritage');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createWorldHeritage = async (req, res) => {
    const worldHeritage = await WorldHeritage.create(req.body)
    res.status(StatusCodes.CREATED).json({ worldHeritage })
}

const getAllWorldHeritage = async (req, res) => {
    const worldHeritages = await WorldHeritage.find({});
    res.status(StatusCodes.OK).json({ count: worldHeritages.length, worldHeritages });
};

const getSingleWorldHeritage = async (req, res) => {
    const worldHeritage = await WorldHeritage.findOne({ _id: req.params.id });
    if (!worldHeritage) {
        throw new CustomError.NotFoundError(`No world heritage with id : ${worldHeritageId}`);
    }
    res.status(StatusCodes.OK).json({ worldHeritage });
};

const updateWorldHeritage = async (req, res) => {
    const worldHeritage = await WorldHeritage.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!worldHeritage) {
        throw new CustomError.NotFoundError(`No world heritage with id : ${worldHeritageId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! world heritage updated.', worldHeritage });
};

const deleteWorldHeritage = async (req, res) => {
    const worldHeritage = await WorldHeritage.findOne({ _id: req.params.id });
    if (!worldHeritage) {
        throw new CustomError.NotFoundError(`No world heritage with id : ${worldHeritageId}`);
    }
    await worldHeritage.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! world heritage removed.' });
};

module.exports = {
    createWorldHeritage,
    getAllWorldHeritage,
    getSingleWorldHeritage,
    updateWorldHeritage,
    deleteWorldHeritage
}
