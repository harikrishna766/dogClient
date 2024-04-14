import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from '../authguard.guard';
import { NewaddComponent } from '../newadd/newadd.component';
import { BuydogComponent } from '../buydog/buydog.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthguardGuard],},
  { path: 'buydog', component:BuydogComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
  { path: 'adddog', component:NewaddComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
