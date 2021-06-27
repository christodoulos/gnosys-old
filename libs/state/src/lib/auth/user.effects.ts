import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import { tap } from 'rxjs/operators';

import { AuthService } from '@gnosys/services';
import { USER_GOOGLE_LOGIN_ACTION, USER_LOGIN_ACTION } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  userLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(ofType(USER_LOGIN_ACTION))
  );

  userGoogleLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_GOOGLE_LOGIN_ACTION),
      tap(() => {
        this.authService.googleSignin();
      })
    )
  );
}
