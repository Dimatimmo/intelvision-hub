import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmailGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    let isValid = true;
    this.auth.user.subscribe((user: any) => {
      if (user?.email?.includes('@intelvision.pro') || !user) {
        this.router.navigateByUrl('/');
        return false;
      }
      return true;
    });
    return of(isValid);
  }
}
