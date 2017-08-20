import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    constructor() { }

    getCategories() {
        return [{ _id: "1", name: "Drama" }, { _id: "2", name: "Comedy" }, { _id: "3", name: "Science Fiction" }, { _id: "4", name: "History" }, { _id: "5", name: "Sports" }, { _id: "6", name: "Travel" }];
    }

}