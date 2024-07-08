const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    content: String,
    price: Number,
    imageUrl: String 
});

module.exports = mongoose.model('Coffee', coffeeSchema);