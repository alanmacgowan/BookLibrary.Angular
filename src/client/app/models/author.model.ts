export class Author {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public birthDate: Date,
        public country: string,
        public about: string,
        public gender: string,
        public image: string) { }
}