import { IEntity } from '../core/IEntity';

export class Author implements IEntity {
    constructor(
        public _id: string,
        public firstName: string,
        public lastName: string,
        public birthDate: Date,
        public country: string,
        public about: string,
        public gender: string,
        public image: string) { }
}