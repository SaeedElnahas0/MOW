const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide museum name'],
        },
        photo: {
            type: String,
            required: [true, 'Please provide museum photo'],
        },
        information: {
            type: String,
            required: [true, 'Please provide museum information'],
        },
        location: {
            type: String,
            required: [true, 'Please provide museum location'],
        },
        visiting_dates: {
            type: String,
            required: [true, 'Please provide museum visiting_dates'],
        },
        tickets: {
            type: String,
            required: [true, 'Please provide museum ticket'],
        },
        gallery: {
            type: String,
            required: [true, 'Please provide museum gallery'],
        },
        instructions: {
            type: String,
            required: [true, 'Please provide museum instructions'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Museum', museumSchema);