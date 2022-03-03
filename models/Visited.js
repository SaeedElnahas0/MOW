const mongoose = require('mongoose');

const visitedSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        visited: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Visited', visitedSchema);