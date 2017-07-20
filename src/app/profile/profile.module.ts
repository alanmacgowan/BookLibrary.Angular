import { NgModule } from '@angular/core';

import { ProfileRoutingModule, routedComponents } from './profile-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [ProfileRoutingModule, CoreModule],
  declarations: [routedComponents],
})
export class ProfileModule { }