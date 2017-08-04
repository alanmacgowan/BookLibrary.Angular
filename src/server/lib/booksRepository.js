const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Book = require('../models/book');

class BooksRepository {

    // get all the Books
    getBooks(callback) {
        console.log('*** BooksRepository.getBooks');
        Book.find({}, (err, books) => {
            if (err) { 
                console.log(`*** BooksRepository.getBooks error: ${err}`); 
                return callback(err); 
            }
            callback(null, {
                books: books
            });
        });
    }

}

module.exports = new BooksRepository();