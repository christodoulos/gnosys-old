import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { resetStores } from '@datorama/akita';
import firebase from 'firebase/app';

import { User, UserStore } from '.';

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
        const data = this.parseFirebaseResponse(user);
        this.updateUser(data);
        this.updateFirestoreDoc(data);
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['']);
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

  parseFirebaseResponse(user: firebase.User | null): Partial<User> {
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

  async signInWithPopup(prov: string) {
    this.setUserLoading(true);
    // Default provider is 'google'
    let provider = new firebase.auth.GoogleAuthProvider();
    if (prov === 'facebook')
      provider = new firebase.auth.FacebookAuthProvider();
    else if (prov === 'github')
      provider = new firebase.auth.GithubAuthProvider();
    await this.auth
      .signInWithPopup(provider)
      .then(() => console.log(`Signed In with provider ${provider.providerId}`))
      .catch((onrejected) => console.log(onrejected.message))
      .finally(() => this.setUserLoading(false));
  }

  async signOut() {
    await this.auth.signOut();
    resetStores();
  }
}
