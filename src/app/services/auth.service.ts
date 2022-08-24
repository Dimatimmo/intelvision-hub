import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(public readonly angularFireAuth: AngularFireAuth) {}

  public loginUser(): void {
    this.angularFireAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    this.angularFireAuth.signOut();
  }
}
