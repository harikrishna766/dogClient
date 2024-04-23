import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from '../authguard.guard';
import { NewaddComponent } from '../newadd/newadd.component';
import { BuydogComponent } from '../buydog/buydog.component';
import { BuydogprodutsComponent } from '../buydogproduts/buydogproduts.component';
import { AlladdcartproductsListComponent } from '../alladdcartproducts-list/alladdcartproducts-list.component';
import { AllbuyproductsListComponent } from '../allbuyproducts-list/allbuyproducts-list.component';
import { AccessoriesComponent } from '../accessories/accessories.component';
const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthguardGuard],},
  { path: 'buydog', component:BuydogComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
  { path: 'adddog', component:NewaddComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
  { path: 'buydogproducts/:id', component:BuydogprodutsComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
  { path: 'allcartdetails', component:AlladdcartproductsListComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
  { path: 'allbuyproductdetails', component:AllbuyproductsListComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
  { path: 'accessories', component:AccessoriesComponent,canActivate: [AuthguardGuard],
  data: { roles: ['user', 'admin'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
