import { Component, Input, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { IEntity } from '../IEntity';
import { ISortResult } from './ISortResult';
import { IGridColumn } from './IGridColumn';
import { IGridRow } from './IGridRow';

@Component({
    selector: 'app-grid',
    templateUrl: 'grid.component.html',
    styles: [`.grid-cell {
        padding: 8px;
        width: 1%;
    }`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

    @Output() onItemEdit: EventEmitter<IEntity> = new EventEmitter();
    @Output() onItemDelete: EventEmitter<IEntity> = new EventEmitter();
    @Output() onSort: EventEmitter<ISortResult> = new EventEmitter();
    @Output() onPageChanged: EventEmitter<number> = new EventEmitter();

    @Input() columns: IGridColumn[] = [];
    @Input() rows: IGridRow[] = [];
    @Input() title: string;
    @Input() totalItems: number = 0;
    @Input() pageSize: number = 5;

    constructor() {
    }

    ngOnInit() {

    }

    sort(sort: ISortResult) {
        this.onSort.emit(sort);
    }

    editItem(entity: IEntity) {
        this.onItemEdit.emit(entity);
    }

    deleteItem(entity: IEntity) {
        this.onItemDelete.emit(entity);
    }

    pageChange(page: number) {
        this.onPageChanged.emit(page);
    }

}
