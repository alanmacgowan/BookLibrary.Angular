import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './grid-pagination.component';
import { GridHeaderComponent } from './grid-header.component';
import { GridRowComponent } from './grid-row.component';
import { GridComponent } from './grid.component';

@NgModule({
    imports: [CommonModule],
    exports: [
        PaginationComponent,
        GridHeaderComponent,
        GridRowComponent,
        GridComponent
    ],
    declarations: [
        PaginationComponent,
        GridHeaderComponent,
        GridRowComponent,
        GridComponent]
})
export class GridModule {

}
