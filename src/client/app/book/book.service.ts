import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Book } from '../models/book.model';
import { CONFIG, ExceptionService, ToastService, SpinnerService } from '../core';
import { Observable } from "rxjs/Observable";

let booksUrl = CONFIG.baseUrls.books;

@Injectable()
export class BookService {

    constructor(private http: Http,
        private exceptionService: ExceptionService,
        private toastService: ToastService,
        private spinnerService: SpinnerService) { }

    getBooks() {
        this.spinnerService.show();
        return <Observable<Book[]>>this.http
            .get(booksUrl)
            .map(res => this.extractData<Book[]>(res))
            .catch(this.exceptionService.catchBadResponse)
            .finally(() => this.spinnerService.hide());
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body && body.data || {});
    }

}