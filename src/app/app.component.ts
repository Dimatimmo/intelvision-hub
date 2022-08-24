import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-useful-resources';
  userName = '';

  constructor(public auth: AuthService, public router: Router) {
    this.auth.angularFireAuth.user.subscribe((user) => {
      this.userName = user?.displayName as string;
    });
  }

  public login(): void {
    this.auth.loginUser();
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
