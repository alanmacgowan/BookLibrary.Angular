import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BookService } from "./book.service";
import { ModalService, ToastService, SpinnerService } from '../core';
import { IPagedResults } from '../core/IPagedResults';
import { IEntity } from '../core/IEntity';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html'
})
export class BookListComponent implements OnInit {

    books: Book[];
    totalRecords: number = 0;
    pageSize: number = 5;
    currentPage: number = 1;

    constructor(private router: Router,
        private modalService: ModalService,
        private toastService: ToastService,
        private spinnerService: SpinnerService,
        private bookService: BookService
    ) { }

    pageChanged(page: number) {
        this.currentPage = page;
        this.getBooksPaged(page);
    }

    getBooksPaged(page: number) {
        this.bookService.getPaged((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<Book[]>) => {
                this.books = response.results;
                this.totalRecords = response.totalRecords;
            },
            error => {
                console.log(error);
            },
            () => {
                console.log('book retrieval completed');
            });
    }

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

    itemDelete(book: Book) {
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
                        this.getBooksPaged(this.currentPage);
                    });

            }
        });
    }

    ngOnInit() {
        this.getBooksPaged(1);
    }

    itemEdit(entity: IEntity) {
        let link = ['/books', entity._id];
        this.router.navigate(link);
    }
}