import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private router: Router, private service: ServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const roles = route.data['roles'];
    console.log(roles,'=====authrole');
    let expectedRole = null;

    if (roles && roles.length) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === this.service.getRole()) {
          expectedRole = this.service.getRole();
          break; // Exit loop if role is found
        }
      }
      if (expectedRole && this.service.logintaken()) {
        return true;
      } else {
        // Redirect to dashboard if role is not expected or user is not logged in
        this.router.navigate(['/dashboard']);
        return false;
      }
    }
    // Redirect to login if no roles are defined for the route
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
