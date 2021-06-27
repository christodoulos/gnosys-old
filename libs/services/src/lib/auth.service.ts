import { Injectable } from '@angular/core';
import firebase from 'firebase/app'; // https://bit.ly/34j8dHw
import { AngularFireAuth } from '@angular/fire/auth';

import { User, UserService } from '@gnosys/state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined;
  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log(`AUTH SERVICE: \t${user.email} is LOGGEDIN`);
      } else [console.log('AUTH SERVICE: \tLOGGED OUT')];
    });
  }

  async googleSignin() {
    this.userService.setUserLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider(); // https://bit.ly/3p9dABj
    await this.afAuth.signInWithPopup(provider);
    this.userService.setUserLoading(false);
  }

  get isLoggedIn(): boolean {
    const ls = localStorage.getItem('gnosys');
    if (ls) {
      const user: User = JSON.parse(ls).user;
      if (user !== undefined) {
        return user !== null && user.emailVerified !== false ? true : false;
      }
    }
    return false;
  }
}
