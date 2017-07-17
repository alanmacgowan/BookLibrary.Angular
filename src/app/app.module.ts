import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DashboardModule,
    routing,
    CoreModule
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
