import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardGuard implements CanActivate {
  constructor(private router: Router, private service: ServiceService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
   
    if (this.service.logintaken()) {
      if (this.service.logintaken()) {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
        return false;
      }
    }
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
}
