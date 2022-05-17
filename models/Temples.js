const mongoose = require('mongoose');

const templesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            //required: [true, 'Please provide temple name'],
        },
        Photo: {
            type: String,
            //required: [true, 'Please provide temple photo'],
        },
        information: {
            type: String,
            //required: [true, 'Please provide temple information'],
        },
        location: {
            type: String,
            //required: [true, 'Please provide temple location'],
        },
        visiting_dates: {
            type: String,
            //required: [true, 'Please provide temple visiting_dates'],
        },
        tickets: {
            type: String,
            //required: [true, 'Please provide temple ticket'],
        },
        type: {
            type: String,
            //required: [true, 'Please provide temple type'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Temples', templesSchema);