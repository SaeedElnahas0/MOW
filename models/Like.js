const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
    {
        like: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Like', likeSchema);