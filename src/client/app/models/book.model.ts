import { IEntity } from '../core/IEntity';

export class Book implements IEntity {
    constructor(
        public _id: string,
        public title: string,
        public authors: string,
        public description: string,
        public publishDate: Date,
        public price: string,
        public language: string,
        public pages: number,
        public image: string,
        public isbn: string,
        public publisher: string,
        public category: string) { }
}