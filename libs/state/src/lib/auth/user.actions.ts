import { createAction, props } from '@datorama/akita-ng-effects';
import { Credentials } from './user.model';

export const USER_LOGIN_ACTION = createAction(
  '[User] Login',
  props<{ credentials: Credentials }>()
);

export const USER_LOGIN_ACTION_SUCCESS = createAction('[User] Login Success');

export const USER_LOGIN_ACTION_FAILURE = createAction('[User] Login Failure');

export const USER_LOGOUT_ACTION = createAction('[User] Logout');
