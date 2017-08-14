import { Component, Input, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

import { Book } from '../models/book.model';
import { IEntity } from '../core/IEntity';
import { ISortResult } from '../core/ISortResult';

@Component({
    selector: 'books-grid',
    templateUrl: 'books-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookGridComponent implements OnInit {

    @Input() books: Book[] = [];
    @Output() onItemEdit: EventEmitter<IEntity> = new EventEmitter();
    @Output() onItemDelete: EventEmitter<IEntity> = new EventEmitter();
    @Output() onSort: EventEmitter<ISortResult> = new EventEmitter();

    currentSort: String;
    currentSortOrder: number = 1;
    sortClass: String = "fa fa-sort-desc";

    constructor() { }

    ngOnInit() {

    }

    sort(column: String, event?: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.currentSort = column;
        this.currentSortOrder = (this.currentSortOrder === 1) ? -1 : 1;
        this.sortClass = (this.currentSortOrder === 1) ? "fa fa-sort-desc" : "fa fa-sort-asc";
        var sort = { column: this.currentSort, order: this.currentSortOrder };
        this.onSort.emit(sort);
    }

    editItem(entity: IEntity, event?: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.onItemEdit.emit(entity);
    }

    deleteItem(entity: IEntity, event?: MouseEvent) {
        if (event) {
            event.preventDefault();
        }
        this.onItemDelete.emit(entity);
    }

}
