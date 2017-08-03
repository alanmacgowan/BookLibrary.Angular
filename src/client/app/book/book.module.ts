import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule, routedComponents } from './book-routing.module';
import { CoreModule } from '../core/core.module';
import { BookService } from "./book.service";

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    CoreModule],
  declarations: [routedComponents],
  providers: [BookService]
})
export class BookModule { }