const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const recipeSchema = new Schema({
    title: {
        type: String,
        trim: true,
        default: 'My New Recipe'
    },
    description: { 
        type: String,
        trim: true,
        default: 'Description of my New Recipe'
    },
    photo: {
        type: String,
        "trim": true
    },
    ingredients: {
        type: String,
        trim: true
    },
    directions: {
        type: String,
        trim: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    modified: Date,
    previousVersion:[
        //"here will be objects, not IDs"
    ]
}, {versionKey: false});

module.exports = mongoose.model('recipe', recipeSchema);