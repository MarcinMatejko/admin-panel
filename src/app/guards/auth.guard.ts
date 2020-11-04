import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn = true;
  public showStorage = '';

  constructor(private router: Router) {}

  canActivate() {
    this.showStorage = localStorage.getItem('loggedIn');

    if (this.showStorage == 'jestes zalogowany') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
