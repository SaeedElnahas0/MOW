const Hotel = require('../models/Hotel');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createHotel = async (req, res) => {
    const hotel = await Hotel.create(req.body);
    res.status(StatusCodes.CREATED).json({ hotel });
};

const getAllHotels = async (req, res) => {
    const { name, place } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (place) {
        queryObject.place = { $regex: place, $options: 'i' };;
    }
    let result = Hotel.find(queryObject);
    const hotel = await result;
    res.status(StatusCodes.OK).json({ count: hotel.length, hotel });
};

const getSingleHotel = async (req, res) => {
    const hotel = await Hotel.findOne({ _id: req.params.id });
    if (!hotel) {
        throw new CustomError.NotFoundError(`No hotel with id : ${hotelId}`);
    }
    res.status(StatusCodes.OK).json({ hotel });
};

const updateHotel = async (req, res) => {
    const hotel = await Hotel.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!hotel) {
        throw new CustomError.NotFoundError(`No hotel with id : ${hotelId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! hotel updated.', hotel });
};

const deleteHotel = async (req, res) => {
    const hotel = await Hotel.findOne({ _id: req.params.id });
    if (!hotel) {
        throw new CustomError.NotFoundError(`No hotel with id : ${hotelId}`);
    }
    await hotel.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! hotel removed.' });
};

module.exports = {
    createHotel,
    getAllHotels,
    getSingleHotel,
    updateHotel,
    deleteHotel
}
