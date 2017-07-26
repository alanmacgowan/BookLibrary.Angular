export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
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