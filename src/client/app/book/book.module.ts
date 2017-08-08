import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookRoutingModule, routedComponents } from './book-routing.module';
import { CoreModule } from '../core/core.module';
import { BookService } from "./book.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    CoreModule],
  declarations: [routedComponents],
  providers: [BookService]
})
export class BookModule { }