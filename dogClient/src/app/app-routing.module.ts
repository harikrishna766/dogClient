import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthgardGuard } from './authgard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign', component:SignupComponent },
  {
    path: 'dashboard',
    canActivate: [AuthgardGuard],
    loadChildren: () => import('../app/layout/layout-routing.module').then(m => m.LayoutRoutingModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
