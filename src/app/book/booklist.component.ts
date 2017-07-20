import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html'
})
export class BookListComponent implements OnInit {

    books: Book[];

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.books = [
            {
                id: 1, title: 'Book 1', author: 'John Doe', description: 'This is book number 1', publishDate: new Date("February 4, 2017 00:00:00"),
                language: 'Spanish', isbn: '121213333', pages: 121, image: '', publisher: 'Publisher 1', category: 'Comedy', price: '11.21'
            }, {
                id: 2, title: 'Book 2', author: 'Jose Doe', description: 'This is book number 2', publishDate: new Date("January 22, 2013 00:00:00"),
                language: 'Spanish', isbn: '434dffd334', pages: 342, image: '', publisher: 'Publisher 1', category: 'Drama', price: '25.50'
            }, {
                id: 3, title: 'Book 3', author: 'Alan Mac', description: 'This is book number 3', publishDate: new Date("March 14, 2012 00:00:00"),
                language: 'English', isbn: '345666435t', pages: 341, image: '', publisher: 'Publisher 1', category: 'Science Ficiton', price: '2.10'
            }, {
                id: 4, title: 'Book 4', author: 'Juan Perez', description: 'This is book number 4', publishDate: new Date("February 6, 2011 00:00:00"),
                language: 'Spanish', isbn: '43433355', pages: 423, image: '', publisher: 'Publisher 1', category: 'Comedy', price: '16.41'
            },];
    }

    editBook(book: Book) {
        let link = ['/books', book.id];
        this.router.navigate(link);
    }
}