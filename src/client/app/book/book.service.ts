import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book.model';
import { ExceptionService, ToastService, SpinnerService } from '../core';
import * as CONFIG from '../../../../config/config';
import { BaseService } from '../core/base.service';

@Injectable()
export class BookService extends BaseService {

    constructor(protected http: Http,
        protected exceptionService: ExceptionService,
        protected toastService: ToastService,
        protected spinnerService: SpinnerService) {
        super(http, exceptionService, toastService, spinnerService);
        this.url = CONFIG.baseUrl + CONFIG.apiUrls.books;
    }

    getBooks() {
        return this.get<Book>();
    }

    getBook(id: string) {
        return this.getOne<Book>(id);
    }

    updateBook(book: Book) {
        return this.update<Book>(book);
    }

    addBook(book: Book) {
        return this.add<Book>(book);
    }

    deleteBook(book: Book) {
        return this.delete<Book>(book);
    }
    
}