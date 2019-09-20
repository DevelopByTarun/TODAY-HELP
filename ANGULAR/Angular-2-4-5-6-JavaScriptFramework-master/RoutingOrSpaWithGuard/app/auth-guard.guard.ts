import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const promise: Promise<boolean> | Observable<boolean> = this.authService.isAuthenticated();
      promise.then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          }
          // tslint:disable-next-line:one-line
          else {
            this.router.navigate(['/']);
          }
        }
      );
      return promise;
  }
}
