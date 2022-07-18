const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        age: {
            type: Number
        },
        country: {
            type: String
        },
        city: {
            type: String,
            default: 'no'
        },
        category : {
            type: String,
            default: 'no'
        },
        beach : {
            type: String,
            default: 'no'
        },
        beach_Rate : {
            type: Number,
            default: 0
        },
        historical_location : {
            type: String,
            default: 'no'
        },
        historical_location_Rate : {
            type: Number,
            default: 0
        },
        hotel : {
            type: String,
            default: 'no'
        },
        hotel_Rate : {
            type: Number,
            default: 0
        },
        monuments : {
            type: String,
            default: 'no'
        },
        monuments_Rate : {
            type: Number,
            default: 0
        },
        museum : {
            type: String,
            default: 'no'
        },
        museum_Rate : {
            type: Number,
            default: 0
        },
        temple : {
            type: String,
            default: 'no'
        },
        temple_Rate : {
            type: Number,
            default: 0
        },
        tomb : {
            type: String,
            default: 'no'
        },
        tomb_Rate : {
            type: Number,
            default: 0
        },
        world_heritage : {
            type: String,
            default: 'no'
        },
        world_heritage_Rate : {
            type: Number,
            default: 0
        },
        visited_Egypt : {
            type: String,
            enum: ['yes', 'no'],
        },
        last_year_trip : {
            type: Number,
            default: 0
        },
        last_place_trip: {
            type: String,
            default: 'no'
        },
        future_place_trip : {
            type: String,
            default: 'no'
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
            enum: ['yes', 'no', 'maybe'],
        },
        Egypt : {
            type: String,
            enum: ['yes', 'no', 'maybe'],
        },
        advise_others : {
            type: String,
            enum: ['yes', 'no', 'maybe'],
        },
        tourism_Rate : {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);