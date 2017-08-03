import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { ModalService } from '../core/modal/modal.service';
import { ToastService } from '../core/toast/toast.service';
import { SpinnerService } from '../core/spinner/spinner.service';
import { BookService } from "./book.service";

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
                console.log('error occurred here');
                console.log(error);
            },
            () => {
                console.log('book retrieval completed');
            });
    }

    delete() {
        let msg = `Do you want to delete this item?`;
        this.modalService.activate(msg).then(responseOK => {
            if (responseOK) {
                this.spinnerService.show();
                setTimeout(() => {
                    this.toastService.success(`Successfully Deleted`);
                    this.spinnerService.hide();
                }, 3000);
            }
        });
    }

    ngOnInit() {
        this.getBooks();
    }

    editBook(book: Book) {
        let link = ['/books', book.id];
        this.router.navigate(link);
    }
}