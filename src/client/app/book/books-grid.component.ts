import { Component, Input, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

import { Book } from '../models/book.model';
import { IEntity } from '../core/IEntity';

@Component({
    selector: 'books-grid',
    templateUrl: 'books-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookGridComponent implements OnInit {

    @Input() books: Book[] = [];
    @Output() itemEdit: EventEmitter<IEntity> = new EventEmitter();
    @Output() itemDelete: EventEmitter<IEntity> = new EventEmitter();
    
    constructor() { }

    ngOnInit() {

    }

    sort(column: string) {

    }

    editItem(entity: IEntity, event?: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.itemEdit.emit(entity);
    }

    deleteItem(entity: IEntity, event?: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.itemDelete.emit(entity);
    }

}
