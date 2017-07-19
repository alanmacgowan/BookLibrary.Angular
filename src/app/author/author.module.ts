import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule, routedComponents } from './author-routing.module';
import { CoreModule } from '../core/core.module';

import { GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    CoreModule,
        GrowlModule],
  declarations: [routedComponents],
})
export class AuthorModule { }