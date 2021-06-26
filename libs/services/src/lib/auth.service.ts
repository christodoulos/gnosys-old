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
  ) {}

  async googleSignin() {
    this.userService.setUserLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider(); // https://bit.ly/3p9dABj
    await this.afAuth.signInWithPopup(provider);
    this.userService.setUserLoading(false);
  }
}
