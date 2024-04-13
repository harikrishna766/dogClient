import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuydogComponent } from './buydog/buydog.component';
import { AdddogComponent } from './adddog/adddog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BuydogComponent,
    AdddogComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ]
})
export class LayoutModule { }
