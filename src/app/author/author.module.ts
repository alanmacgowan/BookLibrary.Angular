import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule, routedComponents } from './author-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
      CommonModule,
      AuthorRoutingModule, 
      CoreModule],
  declarations: [routedComponents],
})
export class AuthorModule { }