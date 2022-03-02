const mongoose = require('mongoose');

const historicalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide historical name'],
        },
        photo: {
            type: String,
            required: [true, 'Please provide historical photo'],
        },
        date: {
            type: String,
            required: [true, 'Please provide historical date'],
        },
        information: {
            type: String,
            required: [true, 'Please provide historical information'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Historical', historicalSchema);