import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './authorlist.component';
import { AuthorEditComponent } from './authoredit.component';

const routes: Routes = [
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule { }

export const routedComponents = [AuthorListComponent, AuthorEditComponent];
