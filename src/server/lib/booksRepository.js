const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Book = require('../models/book');

class BooksRepository {

    // get all the Books
    getBooks(callback) {
        console.log('*** BooksRepository.getBooks');
        Book.find({}).exec()
            .then(books => {
                callback(null, { books: books });
            })
            .catch(err => {
                console.log(`*** BooksRepository.getBooks error: ${err}`);
                return callback(err);
            });
    }

    getPagedBooks(skip, top, callback) {
        console.log('*** BooksRepository.getPagedBooks');
        Book.count((err, bookCount) => {
            var count = bookCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Books count: ${count}`);

            Book.find({})
                .sort({ _id: 1 })
                .skip(skip)
                .limit(top)
                .exec((err, books) => {
                    if (err) {
                        console.log(`*** BooksRepository.getPagedBooks error: ${err}`);
                        return callback(err);
                    }
                    callback(null, {
                        count: count,
                        items: books
                    });
                });

        });
    }

    getBook(id, callback) {
        console.log('*** BooksRepository.getBook');
        Book.findById(id).exec()
            .then(book => {
                callback(null, book);
            })
            .catch(err => {
                console.log(`*** BooksRepository.getBook error: ${err}`);
                return callback(err);
            });
    }

    insertBook(body, callback) {
        console.log('*** BooksRepository.insertBook');
        var book = new Book();
        console.log(body);

        book.title = body.title;
        book.authors = body.authors;
        book.description = body.description;
        book.publishDate = body.publishDate;
        book.price = body.price;
        book.language = body.language;
        book.pages = body.pages;
        book.image = body.image;
        book.isbn = body.isbn;
        book.publisher = body.publisher;
        book.category = body.category;

        book.save()
            .then(book => {
                callback(null, book);
            })
            .catch(err => {
                console.log(`*** BooksRepository.insertBook error: ${err}`);
                return callback(err);
            });
    }

    updateBook(id, body, callback) {
        console.log('*** BooksRepository.updateBook');

        Book.findById(id, (err, book) => {
            if (err) {
                console.log(`*** BooksRepository.updateBook error: ${err}`);
                return callback(err);
            }

            book.title = body.title || book.title;
            book.authors = body.authors || book.authors;
            book.description = body.description || book.description;
            book.publishDate = body.publishDate || book.publishDate;
            book.price = body.price || book.price;
            book.language = body.language || book.language;
            book.pages = body.pages || book.pages;
            book.image = body.image || book.image;
            book.isbn = body.isbn || book.isbn;
            book.publisher = body.publisher || book.publisher;
            book.category = body.category || book.category;

            book.save()
                .then(book => {
                    callback(null, book);
                })
                .catch(err => {
                    console.log(`*** BooksRepository.updateBook error: ${err}`);
                    return callback(err);
                });

        });
    }

    deleteBook(id, callback) {
        console.log('*** BooksRepository.deleteBook');
        Book.remove({ '_id': id })
            .then(book => {
                callback(null, book);
            })
            .catch(err => {
                console.log(`*** BooksRepository.deleteBook error: ${err}`);
                return callback(err);
            });
    }


}

module.exports = new BooksRepository();