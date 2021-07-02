import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { UserStore } from './user.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        console.log(`USER SERVICE: \t${user.email} is LOGGEDIN`);
      } else {
        console.log('USER SERVICE: \tLOGGED OUT');
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
}
