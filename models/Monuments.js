const mongoose = require('mongoose');

const monumentsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide monuments name'],
        },
        Photo: {
            type: String,
            required: [true, 'Please provide monuments photo'],
        },
        information: {
            type: String,
            required: [true, 'Please provide monuments information'],
        },
        location: {
            type: String,
            required: [true, 'Please provide monuments location'],
        },
        visiting_dates: {
            type: String,
            required: [true, 'Please provide monuments visiting_dates'],
        },
        tickets: {
            type: String,
            required: [true, 'Please provide monuments ticket'],
        },
        type: {
            type: String,
            required: [true, 'Please provide monuments type'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Monuments', monumentsSchema);