
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ExceptionService, ToastService, SpinnerService } from '../core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService {

    public getUrl: string;

    constructor(protected http: Http,
        protected exceptionService: ExceptionService,
        protected toastService: ToastService,
        protected spinnerService: SpinnerService) { }

    get<T>() {
        this.spinnerService.show();
        return <Observable<T[]>>this.http
            .get(this.getUrl)
            .map(res => this.extractData<T[]>(res))
            .catch(this.exceptionService.catchBadResponse)
            .finally(() => this.spinnerService.hide());
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body && body || {});
    }
}