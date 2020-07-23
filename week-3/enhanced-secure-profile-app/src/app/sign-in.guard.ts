/*
 * Title: sign-in.guard.ts
 * Author: Ashleigh Lyman
 * Date: 22 July 2020
 * Description: guard for sign-in access
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private route: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;

    } else {
      this.route.navigate(['/']);
      return false;
    }


  }

}
