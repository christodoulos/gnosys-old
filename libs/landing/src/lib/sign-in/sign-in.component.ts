import { Component, OnInit } from '@angular/core';
import { Credentials } from '@gnosys/state';

@Component({
  selector: 'gnosys-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  doGoogleSignIn() {
    console.log('Google Sign In');
  }

  doSignIn(credentials: Credentials) {
    console.log(credentials);
  }
}
