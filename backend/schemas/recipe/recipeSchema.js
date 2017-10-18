const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const recipeSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        default: 'My New Recipe'
    },
    description: { 
        type: String,
        trim: true,
        required: true
    },
    ingredients: {
        type: String,
        trim: true,
        required: true,
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
    previousVersion:[
        //"here will be objects, not IDs"
    ],
    new: {
        type: Boolean,
        default: true
    }
}, {versionKey: false});

module.exports = mongoose.model('recipe', recipeSchema);