import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './booklist.component';
import { BookEditComponent } from './bookedit.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule { }

export const routedComponents = [BookListComponent, BookEditComponent];
