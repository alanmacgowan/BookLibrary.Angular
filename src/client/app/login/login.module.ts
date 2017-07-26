import { NgModule } from '@angular/core';

import { LoginRoutingModule, routedComponents } from './login-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [LoginRoutingModule, CoreModule],
  declarations: [routedComponents],
})
export class LoginModule { }