const mongoose = require('mongoose');

const historicalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide museum name'],
        },
        photo: {
            type: String,
            required: [true, 'Please provide museum photo'],
        },
        date: {
            type: String,
            required: [true, 'Please provide museum date'],
        },
        information: {
            type: String,
            required: [true, 'Please provide museum information'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Historical', historicalSchema);