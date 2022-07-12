const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        photo: {
            type: String,
        },
        Date: {
            type: String,
        },
        Information: {
            type: String,
        },
        VideoLink: {
            type: String,
        },
        gallery: {
            type: Array,
        }
    }, 
);

module.exports = mongoose.model('Event', eventSchema);