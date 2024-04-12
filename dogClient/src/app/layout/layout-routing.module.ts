import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashdoardComponent } from './dashdoard/dashdoard.component';
import { BuydogComponent } from './buydog/buydog.component';
import { AdddogComponent } from './adddog/adddog.component';
import { AuthgardGuard } from '../authgard.guard';

const routes: Routes = [
  { path: '', component: DashdoardComponent, canActivate: [AuthgardGuard],

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
