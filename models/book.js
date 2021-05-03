//the object js was was modificated to adapt to my project 
//    The original code source is: https://github.com/mikhail-cct/iwa2-test

var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    title: { type: String, unique: true},
    author: String,
    gender: String,
    desc: String,
    year: Number,
    price: Number 
},
    { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);