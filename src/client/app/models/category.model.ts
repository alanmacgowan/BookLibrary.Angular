import { IEntity } from '../core/IEntity';

export class Category implements IEntity {
    constructor(
        public _id: string,
        public name: string
    ){}
}