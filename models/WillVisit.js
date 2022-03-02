const mongoose = require('mongoose');

const willVisitSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        willVisit: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('WillVisit', willVisitSchema);