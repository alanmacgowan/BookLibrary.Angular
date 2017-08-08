const booksRepo = require('../../../lib/booksRepository'),
    util = require('util');

class BooksController {

    constructor(router) {
        router.get('/', this.getBooks.bind(this));
        router.get('/:id', this.getBook.bind(this));
        router.post('/', this.insertBook.bind(this));
        router.put('/:id', this.updateBook.bind(this));
        router.delete('/:id', this.deleteBook.bind(this));
    }

    getBooks(req, res) {
        console.log('*** getBooks');
        booksRepo.getBooks((err, data) => {
            if (err) {
                console.log('*** getBooks error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getBooks ok');
                res.json(data.books);
            }
        });
    }

    getBook(req, res) {
        console.log('*** getBook');
        const id = req.params.id;
        console.log(id);

        booksRepo.getBook(id, (err, book) => {
            if (err) {
                console.log('*** getBook error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getBook ok');
                res.json(book);
            }
        });
    }

    insertBook(req, res) {
        console.log('*** insertBook: ' + JSON.stringify(req.body));
  
        booksRepo.insertBook(req.body, (err, book) => {
            if (err) {
                console.log('*** booksRepo.insertBook error: ' + util.inspect(err));
                res.json({ status: false, error: 'Insert failed', book: null });
            } else {
                console.log('*** insertBook ok');
                res.json({ status: true, error: null, book: book });
            }
        });
    }

    updateBook(req, res) {
        console.log('*** updateBook');
        console.log('*** req.body');
        console.log(req.body);

        booksRepo.updateBook(req.params.id, req.body, (err, book) => {
            if (err) {
                console.log('*** updateBook error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', book: null });
            } else {
                console.log('*** updateBook ok');
                res.json({ status: true, error: null, book: book });
            }
        });

    }

    deleteBook(req, res) {
        console.log('*** deleteBook');

        booksRepo.deleteBook(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteBook error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteBook ok');
                res.json({ status: true });
            }
        });
    }

}

module.exports = BooksController;