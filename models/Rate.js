const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        museum: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Museum',
        },
        rate: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Rate', rateSchema);