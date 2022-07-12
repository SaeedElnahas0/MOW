const Event = require('../models/Event');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createEvent = async (req, res) => {
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({ event });
};

const getAllEvents = async (req, res) => {
    const { name } = req.query;
    const queryObject = {};
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    let result = Event.find(queryObject);
    const event = await result;
    res.status(StatusCodes.OK).json({ count: event.length, event });
};

const getSingleEvent = async (req, res) => {
    const event = await Event.findOne({ _id: req.params.id });
    if (!event) {
        throw new CustomError.NotFoundError(`No Event with id : ${eventId}`);
    }
    res.status(StatusCodes.OK).json({ event });
};

const updateEvent = async (req, res) => {
    const event = await Event.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!event) {
        throw new CustomError.NotFoundError(`No Event with id : ${eventId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Event updated.', event });
};

const deleteEvent = async (req, res) => {
    const event = await Event.findOne({ _id: req.params.id });
    if (!event) {
        throw new CustomError.NotFoundError(`No Event with id : ${eventId}`);
    }
    await event.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Event removed.' });
};

module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    updateEvent,
    deleteEvent
}