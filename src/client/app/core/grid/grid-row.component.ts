import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IGridColumn } from "./IGridColumn";
import { IEntity } from "../IEntity";
import { IGridRow } from "./IGridRow";

@Component({
    selector: 'grid-row',
    templateUrl: 'grid-row.component.html'
})
export class GridRowComponent implements OnInit {

    @Input() items: IGridRow[] = [];
    @Output() onItemEdit: EventEmitter<IEntity> = new EventEmitter();
    @Output() onItemDelete: EventEmitter<IEntity> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {

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
