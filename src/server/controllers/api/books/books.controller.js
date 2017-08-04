const booksRepo = require('../../../lib/booksRepository'),
      util = require('util');

class BooksController {

    constructor(router) {
        router.get('/', this.getBooks.bind(this));
        // router.get('/:id', this.getBook.bind(this));
        // router.post('/', this.insertBook.bind(this));
        // router.put('/:id', this.updateBook.bind(this));
        // router.delete('/:id', this.deleteBook.bind(this));
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

}

module.exports = BooksController;