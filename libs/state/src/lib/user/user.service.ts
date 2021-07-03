import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';

import { UserStore } from './user.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private userStore: UserStore,
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        console.log(`USER SERVICE: \t${user.email} is LOGGEDIN`);
        this.router.navigate(['user']);
      } else {
        console.log('USER SERVICE: \tLOGGED OUT');
        this.router.navigate(['']);
      }
    });
  }

  setUserLoading(value: boolean) {
    this.userStore.update({ loading: value });
  }

  updateUser(user: Partial<User>) {
    this.userStore.update({ ...user, loading: false });
  }

  parseGoogleResponse(user: firebase.User | null): Partial<User> {
    if (user)
      return {
        uid: user.uid || '',
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        emailVerified: user.emailVerified || false,
      };
    return {};
  }

  updateFirestoreDoc(data: Partial<User>) {
    const userRef: AngularFirestoreDocument<Partial<User>> = this.afs.doc(
      `users/${data.uid}`
    );
    userRef.set({ ...data }, { merge: true });
  }
}
