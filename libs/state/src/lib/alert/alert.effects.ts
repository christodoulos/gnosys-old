import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import { tap } from 'rxjs/operators';

import { AlertService } from './alert.service';
import { AlertType } from './alert.model';

import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_INFO,
  ALERT_WARN,
  ALERT_DISMISS,
} from './alert.actions';

@Injectable()
export class AlertEffects {
  constructor(private actions$: Actions, private alertService: AlertService) {}

  alertSuccessEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ALERT_SUCCESS),
      tap((payload) => {
        this.alertService.add(
          payload.message,
          AlertType.Success,
          payload.options
        );
      })
    )
  );

  alertErrorEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ALERT_ERROR),
      tap((payload) => {
        this.alertService.add(
          payload.message,
          AlertType.Error,
          payload.options
        );
      })
    )
  );

  alertInfoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ALERT_INFO),
      tap((payload) => {
        this.alertService.add(payload.message, AlertType.Info, payload.options);
      })
    )
  );

  alertWarnEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ALERT_WARN),
      tap((payload) => {
        this.alertService.add(
          payload.message,
          AlertType.Warning,
          payload.options
        );
      })
    )
  );

  alertDismissEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ALERT_DISMISS),
      tap((payload) => {
        this.alertService.remove(payload.id);
      })
    )
  );
}
