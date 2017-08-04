const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    publishDate: { type: Date, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    language: { type: String, required: true, trim: true },
    pages: { type: Number, required: true },
    image: { type: String },
    isbn: { type: String },
    publisher: { type: String },
    category: { type: String },
});

module.exports = mongoose.model('Book', BookSchema, 'books');
