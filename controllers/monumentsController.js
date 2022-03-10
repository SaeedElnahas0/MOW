const Monuments = require('../models/Monuments');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createMonuments = async (req, res) => {
    const monuments = await Monuments.create(req.body);
    res.status(StatusCodes.CREATED).json({ monuments });
};

const getAllMonuments = async (req, res) => {
    const { name, location } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (location) {
        queryObject.location = { $regex: location, $options: 'i' };;
    }
    let result = Monuments.find(queryObject);
    const monuments = await result;
    res.status(StatusCodes.OK).json({ count: monuments.length, monuments });
};

const getSingleMonuments = async (req, res) => {
    const monuments = await Monuments.findOne({ _id: req.params.id });
    if (!monuments) {
        throw new CustomError.NotFoundError(`No monuments with id : ${monumentsId}`);
    }
    res.status(StatusCodes.OK).json({ monuments });
};

const updateMonuments = async (req, res) => {
    const monuments = await Monuments.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!monuments) {
        throw new CustomError.NotFoundError(`No monuments with id : ${monumentsId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! monuments updated.', monuments });
};

const deleteMonuments = async (req, res) => {
    const monuments = await Monuments.findOne({ _id: req.params.id });
    if (!monuments) {
        throw new CustomError.NotFoundError(`No monuments with id : ${monumentsId}`);
    }
    await monuments.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! monuments removed.' });
};

module.exports = {
    createMonuments,
    getAllMonuments,
    getSingleMonuments,
    updateMonuments,
    deleteMonuments
}
