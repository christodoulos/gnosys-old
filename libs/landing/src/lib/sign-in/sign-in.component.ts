import { Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';

import {
  Credentials,
  USER_GOOGLE_LOGIN_ACTION,
  UserQuery,
} from '@gnosys/state';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'gnosys-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loading$: Observable<boolean | undefined> = of(false);
  constructor(private actions: Actions, private user: UserQuery) {}

  ngOnInit(): void {
    this.loading$ = this.user.loading$;
  }

  doGoogleSignIn() {
    console.log('Google Sign In');
    this.actions.dispatch(USER_GOOGLE_LOGIN_ACTION);
  }

  doSignIn(credentials: Credentials) {
    console.log(credentials);
  }
}
