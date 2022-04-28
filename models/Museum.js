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
            type: Array,
            required: [true, 'Please provide museum gallery'],
        },
        instructions: {
            type: String,
            required: [true, 'Please provide museum instructions'],
        },
        sketching: {
            type: String,
            required: [true, 'Please provide museum sketching'],
        },
        last_tickets: {
            type: String,
            required: [true, 'Please provide museum last tickets'],
        },
        free_tickets: {
            type: String,
            required: [true, 'Please provide museum free tickets'],
        },
        photo_instructions: {
            type: String,
            required: [true, 'Please provide museum photo instructions'],
        },
        photo_price: {
            type: String,
            required: [true, 'Please provide museum photo price'],
        },
        emergency: {
            type: String,
            required: [true, 'Please provide museum emergency'],
        },
        type: {
            type: String,
            required: [true, 'Please provide museum type'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Museum', museumSchema);