import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path:"",redirectTo:'/login',pathMatch:'full'},
  { path: 'sign', component:SignupComponent},
  {
    path: 'dashboard',
     canActivate: [AuthguardGuard],
     data: { roles: ['user', 'admin'] },
    loadChildren: () => import('../app/layout/layout-routing.module').then(m => m.LayoutRoutingModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
