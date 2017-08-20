import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

    constructor() { }

    getLanguages() {
        return [{ _id: "1", name: "Spanish" }, { _id: "2", name: "English" }, { _id: "3", name: "Portugues" }, { _id: "4", name: "German" }];
    }

}