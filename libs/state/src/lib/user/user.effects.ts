import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { resetStores } from '@datorama/akita';
import { map, tap } from 'rxjs/operators';

import { UserService } from './user.service';
import {
  USER_GOOGLE_LOGIN_ACTION,
  USER_GOOGLE_LOGIN_FAILURE_ACTION,
  USER_FACEBOOK_LOGIN_ACTION,
  USER_GITHUB_LOGIN_ACTION,
  USER_LOGIN_ACTION,
  USER_LOGOUT_ACTION,
} from './user.actions';
import { ALERT_ERROR } from '../alert/alert.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  userLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(ofType(USER_LOGIN_ACTION))
  );

  userLogoutActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_LOGOUT_ACTION),
      tap(async () => {
        this.auth.signOut();
        resetStores();
        this.router.navigate(['/']);
      })
    )
  );

  userGoogleLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_GOOGLE_LOGIN_ACTION),
      tap(async () => {
        this.userService.setUserLoading(true);
        await this.auth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then((onfulfilled) => {
            console.log(onfulfilled);

            this.router.navigate(['/user']);
          })
          .catch((onrejected) => {
            this.actions$.dispatch(
              USER_GOOGLE_LOGIN_FAILURE_ACTION({ message: onrejected.message })
            );
          })
          .finally(() => {
            this.userService.setUserLoading(false);
          });
      })
    )
  );

  userFacebookLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_FACEBOOK_LOGIN_ACTION),
      tap(async () => {
        this.userService.setUserLoading(true);
        const provider = new firebase.auth.FacebookAuthProvider();
        await this.auth.signInWithPopup(provider);
        this.userService.setUserLoading(false);
        this.router.navigate(['/user']);
      })
    )
  );

  userGithubLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_GITHUB_LOGIN_ACTION),
      tap(async () => {
        this.userService.setUserLoading(true);
        const provider = new firebase.auth.GithubAuthProvider();
        await this.auth.signInWithPopup(provider);
        this.userService.setUserLoading(false);
        this.router.navigate(['/user']);
      })
    )
  );

  userGoogleLoginFailureActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_GOOGLE_LOGIN_FAILURE_ACTION),
      map((payload) => payload.message),
      tap((message) => {
        this.actions$.dispatch(ALERT_ERROR({ message }));
      })
    )
  );
}