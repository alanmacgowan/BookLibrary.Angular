import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ISortResult } from './ISortResult';
import { IGridColumn } from "./IGridColumn";

@Component({
    selector: 'grid-header',
    templateUrl: 'grid-header.component.html'
})
export class GridHeaderComponent implements OnInit {

    @Input() columns: IGridColumn[] = [];
    @Output() onSort: EventEmitter<ISortResult> = new EventEmitter();

    currentSort: String;
    currentSortOrder: number = 1;
    sortClass: String = "fa fa-sort-desc";

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

    constructor() {
    }

    ngOnInit(): void {

    }

}
