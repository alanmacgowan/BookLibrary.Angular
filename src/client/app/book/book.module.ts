import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookRoutingModule, routedComponents } from './book-routing.module';
import { CoreModule } from '../core/core.module';
import { BookService } from './book.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    CoreModule,
    SharedModule],
  declarations: [routedComponents],
  providers: [BookService]
})
export class BookModule { }