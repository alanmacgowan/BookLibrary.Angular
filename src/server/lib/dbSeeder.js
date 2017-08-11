// Module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Book = require('../models/book');

var dbSeeder = function () {

    var init = function () {
        // mongoose.connection.db.listCollections({ name: 'books' })
        //     .next(function (err, collinfo) {
        //         if (!collinfo) {
        //             console.log('Starting dbSeeder...');
                     seed();
        //         }
        //     });
    },

        seed = function () {

            console.log('Seeding data....');

            var books =
                [
                    new Book({ "title": "Book 1", "authors": "John Perez", "description": "This is book number 1", "publishDate": "2017-02-03T03:00:00Z", "price": "11.44", "language": "Spanish", "pages": "122", "isbn": "5633333000", "publisher": "Publisher House", "category": "Comedy" }),
                    new Book({ "title": "Book 2", "authors": "Juan Perez", "description": "This is book number 2", "publishDate": "2017-01-02T03:00:00Z", "price": "10.88", "language": "Spanish", "pages": "111", "isbn": "5656888899", "publisher": "Publisher One", "category": "Comedy" }),
                    new Book({ "title": "Book 3", "authors": "Pablo Gomez", "description": "This is book number 3", "publishDate": "1999-02-01T03:00:00Z", "price": "80.99", "language": "Spanish", "pages": "456", "isbn": "5445343548", "publisher": "Publisher House", "category": "Drama" }),
                    new Book({ "title": "Book 4", "authors": "John Perez, Juan Lopez", "description": "This is book number 4", "publishDate": "2017-02-04T03:00:00Z", "price": "55.99", "language": "Spanish", "pages": "33", "isbn": "565657777", "publisher": "The House", "category": "Comedy" }),
                    new Book({ "title": "Book 5", "authors": "John Perez", "description": "This is book number 5", "publishDate": "2003-02-04T03:00:00Z", "price": "4.42", "language": "Spanish", "pages": "890", "isbn": "343466788888", "publisher": "Publisher 1", "category": "Comedy" }),
                    new Book({ "title": "Book 6", "authors": "Alan Perez", "description": "This is book number 6", "publishDate": "2011-11-04T03:00:00Z", "price": "12.00", "language": "Spanish", "pages": "667", "isbn": "5656565667", "publisher": "Publisher House", "category": "History" }),
                    new Book({ "title": "Book 7", "authors": "Carlos Gonzalez", "description": "This is book number 7", "publishDate": "2010-02-04T03:00:00Z", "price": "44.99", "language": "English", "pages": "343", "isbn": "668787878", "publisher": "Publisher 2", "category": "Science Fiction" }),
                    new Book({ "title": "Book 8", "authors": "Manuel Moreno", "description": "This is book number 8", "publishDate": "2000-01-04T03:00:00Z", "price": "32.00", "language": "Spanish", "pages": "400", "isbn": "4343455555", "publisher": "Publisher House", "category": "Drama" }),
                    new Book({ "title": "Book 9", "authors": "Jorge Perez Lopez", "description": "This is book number 9", "publishDate": "2013-09-04T03:00:00Z", "price": "55.00", "language": "German", "pages": "212", "isbn": "232325555", "publisher": "Publisher 2", "category": "Comedy" }),
                    new Book({ "title": "Book 10", "authors": "Pedro Jones", "description": "This is book number 10", "publishDate": "2014-05-22T03:00:00Z", "price": "23.12", "language": "Spanish", "pages": "300", "isbn": "4343434565", "publisher": "Publisher 2", "category": "Comedy" }),
                    new Book({ "title": "Book 11", "authors": "Carl Paulson", "description": "This is book number 11", "publishDate": "2015-06-23T03:00:00Z", "price": "44.23", "language": "Spanish", "pages": "455", "isbn": "2222333333", "publisher": "The Publishers", "category": "Drama" })
                ];

            Book.remove({})
                .then(book => {})
                .catch(err => {
                    console.log(`error: ${err}`);
                });

            for (i = 0; i < books.length; i++) {
                var book = books[i];

                book.save(function (err, b) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('inserted book: ' + b.title + ' - ' + b.description);
                    }
                });
            }

        };

    return {
        init: init,
        seed: seed
    }
}();

module.exports = dbSeeder;




