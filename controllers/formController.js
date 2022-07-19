const Form = require('../models/Form');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createForm = async (req, res) => {
    const form = await Form.create(req.body)
    res.status(StatusCodes.CREATED).json({ form })
}

const getAllForms = async (req, res) => {
    const form = await Form.find({});
    res.status(StatusCodes.OK).json({ form });
};

const getSingleForm = async (req, res) => {
    const form = await Form.findOne({ _id: req.params.id });
    if (!form) {
        throw new CustomError.NotFoundError(`No will visit with id : ${formId}`);
    }
    res.status(StatusCodes.OK).json({ form });
};

const updateForm = async (req, res) => {
    const form = await Form.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!form) {
        throw new CustomError.NotFoundError(`No Form with id : ${formId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'Success! Form updated.', form });
};

const deleteForm = async (req, res) => {
    const form = await Form.findOne({ _id: req.params.id });
    if (!form) {
        throw new CustomError.NotFoundError(`No Form with id : ${formId}`);
    }
    await form.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Form removed.' });
};

module.exports = {
    createForm,
    getAllForms,
    getSingleForm,
    updateForm,
    deleteForm
}