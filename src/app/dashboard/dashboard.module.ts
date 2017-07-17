import { NgModule } from '@angular/core';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [DashboardRoutingModule, CoreModule],
  declarations: [routedComponents],
})
export class DashboardModule { }