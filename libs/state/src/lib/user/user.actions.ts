import { createAction, props } from '@datorama/akita-ng-effects';
import { Credentials, User } from './user.model';

export const USER_LOGIN_ACTION = createAction(
  'Login',
  props<{ credentials: Credentials }>()
);

export const USER_GOOGLE_LOGIN_ACTION = createAction('Google Login');

export const USER_FACEBOOK_LOGIN_ACTION = createAction('Facebook Login');

export const USER_GITHUB_LOGIN_ACTION = createAction('GitHub Login');

export const USER_GOOGLE_LOGIN_FAILURE_ACTION = createAction(
  'Google Login Failure',
  props<{ message: string }>()
);

export const USER_LOGIN_ACTION_SUCCESS = createAction('Login Success');

export const USER_LOGIN_ACTION_FAILURE = createAction('Login Failure');

export const USER_LOGOUT_ACTION = createAction('Logout');

export const USER_UPDATE_ACTION = createAction(
  'Update User Data',
  props<{ userData: Partial<User> }>()
);
