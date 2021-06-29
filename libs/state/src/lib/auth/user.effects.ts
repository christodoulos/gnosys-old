import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import firebase from 'firebase/app'; // https://bit.ly/34j8dHw
import { AngularFireAuth } from '@angular/fire/auth';
import { resetStores } from '@datorama/akita';
import { tap } from 'rxjs/operators';

import { UserService } from './user.service';
import {
  USER_GOOGLE_LOGIN_ACTION,
  USER_LOGIN_ACTION,
  USER_LOGOUT_ACTION,
} from './user.actions';
import { ALERT_ERROR } from '../alert/alert.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private afAuth: AngularFireAuth
  ) {}

  userLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(ofType(USER_LOGIN_ACTION))
  );

  userLogoutActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_LOGOUT_ACTION),
      tap(async () => {
        this.afAuth.signOut();
        resetStores();
      })
    )
  );

  userGoogleLoginActionEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(USER_GOOGLE_LOGIN_ACTION),
        tap(async () => {
          this.userService.setUserLoading(true);
          const provider = new firebase.auth.GoogleAuthProvider(); // https://bit.ly/3p9dABj
          await this.afAuth.signInWithPopup(provider);
          this.userService.setUserLoading(false);
        })
      )
    // { dispatch: true }
  );
}
