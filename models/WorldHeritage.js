//WorldHeritage
const mongoose = require('mongoose');

const WorldHeritageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide World Heritage name'],
        },
        photo: {
            type: String,
            required: [true, 'Please provide World Heritage photo'],
        },
        information: {
            type: String,
            required: [true, 'Please provide World Heritage information'],
        },
        gallery: {
            type: String,
            required: [true, 'Please provide World Heritage gallery'],
        },
    },    
    { timestamps: true }
);

module.exports = mongoose.model('WorldHeritage', WorldHeritageSchema);