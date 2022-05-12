const mongoose = require('mongoose');

const beachSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            //required: [true, 'Please provide beach name'],
        },
        photo: {
            type: String,
            //required: [true, 'Please provide beach photo'],
        },
        location_map: {
            type: String,
            //required: [true, 'Please provide beach location_map'],
        },
        location: {
            type: String,
            //required: [true, 'Please provide beach location'],
        },
        link: {
            type: String,
            //required: [true, 'Please provide beach link'],
        },
        gallery: {
            type: Array,
            //required: [true, 'Please provide beach gallery'],
        },
        information: {
            type: String,
            //required: [true, 'Please provide beach information'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Beach', beachSchema);