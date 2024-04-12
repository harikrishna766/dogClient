import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { LayoutRoutingModule } from './layout-routing.module';
import { DashdoardComponent } from './dashdoard/dashdoard.component';
import { BuydogComponent } from './buydog/buydog.component';
import { AdddogComponent } from './adddog/adddog.component';


@NgModule({
  declarations: [
    DashdoardComponent,
    BuydogComponent,
    AdddogComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ],
})
export class LayoutModule { }
