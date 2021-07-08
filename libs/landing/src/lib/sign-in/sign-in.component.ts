import { Component } from '@angular/core';
import { Credentials, UserService } from '@gnosys/state';

@Component({
  selector: 'gnosys-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private userService: UserService) {}

  doGoogleSignIn() {
    console.log('Doing Google Sign In ...');
    this.userService.signInWithPopup('google');
  }

  doFacebookSignIn() {
    console.log('Doing Facebook Sign In ...');
    this.userService.signInWithPopup('facebook');
  }

  doGitHubSignIn() {
    console.log('Doing GitHub Sign In');
    this.userService.signInWithPopup('github');
  }

  doSignIn(credentials: Credentials) {
    console.log(credentials);
  }
}
