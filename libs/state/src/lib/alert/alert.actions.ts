import { createAction, props } from '@datorama/akita-ng-effects';
import { AlertOptions } from './alert.model';

export const ALERT_SUCCESS = createAction(
  'NEW success',
  props<{ message: string; options: AlertOptions }>()
);

export const ALERT_ERROR = createAction(
  'NEW error',
  props<{ message: string; options?: AlertOptions }>()
);

export const ALERT_INFO = createAction(
  'NEW info',
  props<{ message: string; options?: AlertOptions }>()
);

export const ALERT_WARN = createAction(
  'NEW warn',
  props<{ message: string; options?: AlertOptions }>()
);

export const ALERT_DISMISS = createAction('DISMISS', props<{ id: string }>());
