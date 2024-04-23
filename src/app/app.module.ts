import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NewaddComponent } from './newadd/newadd.component';
import { BuydogComponent } from './buydog/buydog.component';
import { BuydogprodutsComponent } from './buydogproduts/buydogproduts.component';
import { AllbuyproductsListComponent } from './allbuyproducts-list/allbuyproducts-list.component';
import { AlladdcartproductsListComponent } from './alladdcartproducts-list/alladdcartproducts-list.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewaddComponent,
    BuydogComponent,
    BuydogprodutsComponent,
    AllbuyproductsListComponent,
    AlladdcartproductsListComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
