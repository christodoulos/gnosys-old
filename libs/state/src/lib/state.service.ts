import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserQuery } from './auth';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  somethingIsLoading$: Observable<boolean | undefined> = of(false);
  constructor(private userQuery: UserQuery) {
    this.somethingIsLoading$ = userQuery.loading$;
  }
}
