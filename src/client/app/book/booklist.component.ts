import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BookService } from "./book.service";
import { ModalService, ToastService, SpinnerService } from '../core';
import { IPagedResults } from '../core/IPagedResults';
import { IEntity } from '../core/IEntity';
import { ISortResult } from '../core/grid/ISortResult';
import { IGridColumn } from '../core/grid/IGridColumn';
import { IGridRow } from '../core/grid/IGridRow';

@Component({
    selector: 'app-booklist',
    templateUrl: './booklist.component.html'
})
export class BookListComponent implements OnInit {

    totalRecords: number = 0;
    pageSize: number = 5;
    currentPage: number = 1;
    currentSort: String = '_id';
    currentSortOrder: number = 1;
    columns: IGridColumn[] = [];
    rows: IGridRow[] = [];

    constructor(private router: Router,
        private modalService: ModalService,
        private toastService: ToastService,
        private spinnerService: SpinnerService,
        private bookService: BookService
    ) { }

    pageChanged(page: number) {
        this.currentPage = page;
        this.getBooksPaged(page, this.currentSort, this.currentSortOrder);
    }

    getBooksPaged(page: number, sort?: String, order?: number) {
        this.bookService.getPaged((page - 1) * this.pageSize, this.pageSize, sort, order)
            .subscribe((response: IPagedResults<Book[]>) => {
                this.totalRecords = response.totalRecords;
                this.rows = [];
                response.results.forEach((book) => {
                    this.rows.push({entity: book, columns: [{ type: "ACTIONS", value: '' },
                                                                            { value: book.title },
                                                                            { type: "DATE", value: book.publishDate },
                                                                            { value: book.authors },
                                                                            { value: book.category }]});
                });
            },
            error => {
                console.log(error);
            },
            () => {
                console.log('book retrieval completed');
            });
    }

    sort(sort: ISortResult) {
        this.currentSort = sort.column;
        this.currentSortOrder = sort.order;
        this.getBooksPaged(this.currentPage, this.currentSort, this.currentSortOrder);
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
                        this.getBooksPaged(this.currentPage, this.currentSort);
                    });

            }
        });
    }

    ngOnInit() {
        this.getBooksPaged(1);

        this.columns = [
            { title: "Action", name: "_id", type: "ACTIONS" },
            { title: "Name", name: "title", type: "" },
            { title: "Date", name: "publishDate", type: "" },
            { title: "Authors", name: "authors", type: "" },
            { title: "Category", name: "category", type: "" }];
    }

    itemEdit(entity: IEntity) {
        let link = ['/books', entity._id];
        this.router.navigate(link);
    }
}