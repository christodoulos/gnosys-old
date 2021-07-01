import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Credentials } from '@gnosys/state';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'gnosys-sign-in-ui',
  templateUrl: './sign-in-ui.component.html',
  styleUrls: ['./sign-in-ui.component.css'],
})
export class SignInUIComponent {
  @Input() loading$: Observable<boolean | undefined> = of(false);
  @Output() signIn: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  @Output() googleSignIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() facebookSignIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() githubSignIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm: FormGroup<Credentials>;

  constructor() {
    this.loginForm = new FormGroup<Credentials>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  emitGoogleSignIn() {
    this.googleSignIn.emit(true);
  }

  emitFacebookSignIn() {
    this.facebookSignIn.emit(true);
  }

  emitGitHubSignIn() {
    this.githubSignIn.emit(true);
  }

  emitSignIn() {
    if (this.loginForm.valid) {
      this.signIn.emit(<Credentials>this.loginForm.value);
    }
  }
}
