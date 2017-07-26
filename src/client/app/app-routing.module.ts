import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'authors', loadChildren: 'app/author/author.module#AuthorModule' },
  { path: 'profile', component: ProfileComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }