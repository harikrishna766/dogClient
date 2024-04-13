import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from '../authguard.guard';
import { BuydogComponent } from './buydog/buydog.component';
import { AdddogComponent } from './adddog/adddog.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthguardGuard],

  children:[
  { path: 'buydog', component:BuydogComponent },
  { path: 'adddog', component:AdddogComponent },]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
