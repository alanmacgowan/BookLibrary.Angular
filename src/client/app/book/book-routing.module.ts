import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './booklist.component';
import { BookEditComponent } from './bookedit.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  { path: '', component: BookComponent, 
    children: [
      {
        path: 'books',
        component: BookListComponent,
      },
      {
        path: 'books/:id',
        component: BookEditComponent,
        // canDeactivate: [CanDeactivateGuard],
        // resolve: {
        //   vehicle: VehicleResolver
        // }
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule { }

export const routedComponents = [BookComponent, BookListComponent, BookEditComponent];
