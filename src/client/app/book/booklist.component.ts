import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BookService } from "./book.service";
import { ModalService, ToastService, SpinnerService } from '../core';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html'
})
export class BookListComponent implements OnInit {

    books: Book[];

    constructor(private router: Router,
        private modalService: ModalService,
        private toastService: ToastService,
        private spinnerService: SpinnerService,
        private bookService: BookService
    ) { }


    getBooks() {
        this.books = [];
        this.bookService.getBooks()
            .subscribe(books => {
                this.books = books;
            },
            error => {
                console.log(error);
            },
            () => {
                console.log('book retrieval completed');
            });
    }

    delete(book: Book) {
        let msg = `Do you want to delete this item?`;
        this.modalService.activate(msg).then(responseOK => {
            if (responseOK) {
                this.bookService.deleteBook(book)
                    .subscribe(book => { },
                    error => {
                        this.toastService.error(`There was an error processing the operation`);
                        console.log(error);
                    },
                    () => {
                        this.toastService.success(`Successfully Deleted`);
                        this.getBooks();
                    });
            }
        });
    }

    ngOnInit() {
        this.getBooks();
    }

    editBook(book: Book) {
        let link = ['/books', book._id];
        this.router.navigate(link);
    }
}