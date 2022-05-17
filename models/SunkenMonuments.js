const mongoose = require('mongoose');

const sunkenMonumentsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            //required: [true, 'Please provide sunken monument name'],
        },
        photo: {
            type: String,
            //required: [true, 'Please provide sunken monument photo'],
        },
        information: {
            type: String,
            //required: [true, 'Please provide sunken monument information'],
        },
        location: {
            type: String,
            //required: [true, 'Please provide sunken monument location'],
        },
        gallery: {
            type: Array,
            //required: [true, 'Please provide sunken monument gallery'],
        },
    },    
    { timestamps: true }
);

module.exports = mongoose.model('SunkenMonument', sunkenMonumentsSchema);