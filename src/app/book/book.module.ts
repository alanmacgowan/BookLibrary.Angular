import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule, routedComponents } from './book-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
      CommonModule,
      BookRoutingModule,
      CoreModule],
  declarations: [routedComponents],
})
export class BookModule { }