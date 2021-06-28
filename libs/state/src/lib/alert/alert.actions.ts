import { createAction, props } from '@datorama/akita-ng-effects';
import { AlertOptions } from './alert.model';

export const ALERT_SUCCESS = createAction(
  '[Alert] NEW success',
  props<{ message: string; options: AlertOptions }>()
);

export const ALERT_ERROR = createAction(
  '[Alert] NEW error',
  props<{ message: string; options?: AlertOptions }>()
);

export const ALERT_INFO = createAction(
  '[Alert] NEW info',
  props<{ message: string; options?: AlertOptions }>()
);

export const ALERT_WARN = createAction(
  '[Alert] NEW warn',
  props<{ message: string; options?: AlertOptions }>()
);

export const ALERT_DISMISS = createAction(
  '[Alert] DISMISS',
  props<{ id: string }>()
);
