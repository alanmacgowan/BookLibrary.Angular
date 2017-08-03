export class InMemoryStoreService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let books = [
      {
            "id": 1,
            "title": "Book1",
            "author": "John Doe",
            "description": "This is book number1",
            "publishDate": "February 4, 2017 00:00:00",
            "language": "Spanish",
            "isbn": "121213333",
            "pages": 121,
            "image": "",
            "publisher": "Publisher1",
            "category": "Drama",
            "price": "11.21"
        },
        {
            "id": 1,
            "title": "Book2",
            "author": "John PEREZ",
            "description": "This is book number2",
            "publishDate": "February 4, 2014 00:00:00",
            "language": "Spanish",
            "isbn": "12121334444",
            "pages": 132,
            "image": "",
            "publisher": "Publisher2",
            "category": "Comedy",
            "price": "55.21"
        },
        {
            "id": 3,
            "title": "Book3",
            "author": "John Doe",
            "description": "This is book number3",
            "publishDate": "February 3, 2013 00:00:00",
            "language": "Spanish",
            "isbn": "13333333",
            "pages": 133,
            "image": "",
            "publisher": "Publisher3",
            "category": "Comedy",
            "price": "12.33"
        }
    ];

    return { books };
  }
}