import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';

import { USER_LOGIN_ACTION } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

  userLoginActionEffect$ = createEffect(() =>
    this.actions$.pipe(ofType(USER_LOGIN_ACTION))
  );
}
