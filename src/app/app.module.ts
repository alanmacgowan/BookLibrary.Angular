import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { routing } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthorModule } from './author/author.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DashboardModule,
    AuthorModule,
    routing,
    CoreModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
