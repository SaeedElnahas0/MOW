const mongoose = require('mongoose');

const CollectiblesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide collectibles name'],
        },
        photo: {
            type: String,
            required: [true, 'Please provide collectibles photo'],
        },
        information: {
            type: String,
            required: [true, 'Please provide collectibles information'],
        },
        location: {
            type: String,
            required: [true, 'Please provide collectibles location'],
        },
        type: {
            type: String,
            required: [true, 'Please provide collectibles type'],
        }
    },    
    { timestamps: true }
);

module.exports = mongoose.model('Collectibles', CollectiblesSchema);