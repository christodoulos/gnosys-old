import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserStore, createInitialUser } from './user.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user: User | undefined;
  constructor(private userStore: UserStore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const data = {
          uid: user.uid || '',
          email: user.email || '',
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
          emailVerified: user.emailVerified || false,
        };
        this.updateUser(data);
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

  initializeUser() {
    this.userStore.update({ ...createInitialUser() });
  }

  get isLoggedIn(): boolean {
    const ls = localStorage.getItem('gnosys');
    if (ls) {
      const user: User = JSON.parse(ls).user;
      if (user !== undefined) {
        return user && user.emailVerified ? true : false;
      }
    }
    return false;
  }
}
