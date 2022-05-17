const mongoose = require('mongoose');

const historicalLocationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            //required: [true, 'Please provide Historical Location name'],
        },
        photo: {
            type: String,
            //required: [true, 'Please provide Historical Location photo'],
        },
        information: {
            type: String,
            //required: [true, 'Please provide Historical Location information'],
        },
        location: {
            type: String,
            //required: [true, 'Please provide Historical Location location'],
        },
        visiting_dates: {
            type: String,
            //required: [true, 'Please provide Historical Location visiting_dates'],
        },
        tickets: {
            type: String,
            //required: [true, 'Please provide Historical Location ticket'],
        },
        gallery: {
            type: Array,
            //required: [true, 'Please provide Historical Location gallery'],
        },
        type: {
            type: String,
            //required: [true, 'Please provide Historical Location type'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('HistoricalLocation', historicalLocationSchema);