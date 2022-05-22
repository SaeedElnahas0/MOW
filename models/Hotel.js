const mongoose = require('mongoose');

const hotelsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        photo: {
            type: String,
        },
        information: {
            type: String,
        },
        gallery: {
            type: Array,
        },
        rating: {
            type: String,
        },
        salary: {
            type: String,
        },
        link: {
            type: String,
        },
        location: {
            type: String,
        },
        place: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Hotel', hotelsSchema);