const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        age: {
            type: Number
        },
        country: {
            type: String
        },
        city: {
            type: String,
            default: 'No'
        },
        category : {
            type: String,
            default: 'No'
        },
        beach : {
            type: String,
            default: 'No'
        },
        beach_Rate : {
            type: Number,
            default: 0
        },
        historical_location : {
            type: String,
            default: 'No'
        },
        historical_location_Rate : {
            type: Number,
            default: 0
        },
        hotel : {
            type: String,
            default: 'No'
        },
        hotel_Rate : {
            type: Number,
            default: 0
        },
        monuments : {
            type: String,
            default: 'No'
        },
        monuments_Rate : {
            type: Number,
            default: 0
        },
        museum : {
            type: String,
            default: 'No'
        },
        museum_Rate : {
            type: Number,
            default: 0
        },
        temple : {
            type: String,
            default: 'No'
        },
        temple_Rate : {
            type: Number,
            default: 0
        },
        tomb : {
            type: String,
            default: 'No'
        },
        tomb_Rate : {
            type: Number,
            default: 0
        },
        world_heritage : {
            type: String,
            default: 'No'
        },
        world_heritage_Rate : {
            type: Number,
            default: 0
        },
        visited_Egypt : {
            type: String,
            enum: ['Yes', 'No'],
        },
        last_year_trip : {
            type: Number,
            default: 0
        },
        last_place_trip: {
            type: String,
            default: 'No'
        },
        future_place_trip : {
            type: String,
            default: 'No'
        },
        money_last_trip: {
            type: Number,
            default: 0
        },
        money_trip: {
            type: Number,
            default: 0
        },
        proplem : {
            type: String,
        },
        interested : {
            type: String,
        },
        interested_Rate : {
            type: Number,
            default: 0
        },
        love_Egypt : {
            type: String,
            enum: ['Yes', 'No', 'Maybe'],
        },
        Egypt : {
            type: String,
            enum: ['Yes', 'No', 'Maybe'],
        },
        advise_others : {
            type: String,
            enum: ['Yes', 'No', 'Maybe'],
        },
        tourism_Rate : {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);