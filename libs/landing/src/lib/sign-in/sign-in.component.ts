import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';

import { Credentials, USER_GOOGLE_LOGIN_ACTION } from '@gnosys/state';

@Component({
  selector: 'gnosys-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private actions: Actions) {}

  doGoogleSignIn() {
    console.log('Google Sign In');
    this.actions.dispatch(USER_GOOGLE_LOGIN_ACTION);
  }

  doSignIn(credentials: Credentials) {
    console.log(credentials);
  }
}
