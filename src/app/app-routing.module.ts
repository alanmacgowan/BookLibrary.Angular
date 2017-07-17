import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }