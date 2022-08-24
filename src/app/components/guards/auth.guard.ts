import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    let isValid = true;
    this.auth.user.subscribe((user: any) => {
      if (!user) {
        this.router.navigateByUrl('/');
        return false;
      }
      if (user && !user?.email?.includes('@intelvision.pro')) {
        this.router.navigateByUrl('/verify-email');
        return false;
      }
      if (user && user?.email?.includes('@intelvision.pro')) {
        isValid = true;
        return true;
      }
      return false;
    });
    return of(isValid);
  }
}
