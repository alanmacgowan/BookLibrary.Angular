import { IEntity } from '../core/IEntity';

export class Language implements IEntity {
    constructor(
        public _id: string,
        public name: string
    ){}
}