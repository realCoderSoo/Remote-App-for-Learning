import { Injectable } from '@angular/core';
//import { Router, CanActivate } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage-service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private localStorageService: LocalStorageService, public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.localStorageService.getItem('Route')=="Student") {
      this.router.navigate(['/courses']);
      return false;
    }
    return true;
  }

}