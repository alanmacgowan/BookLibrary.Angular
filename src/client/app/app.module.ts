import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoreService } from "../api/in-memory-store-service";
import './core/rxjs-extensions';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { ProfileModule } from './profile/profile.module';
import { LoginModule } from './login/login.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DashboardModule,
    LoginModule,
    ProfileModule,
    AuthorModule,
    BookModule,
    routing,
    CoreModule,
    InMemoryWebApiModule.forRoot(InMemoryStoreService, { delay: 600 }),
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
