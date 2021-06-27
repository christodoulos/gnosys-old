import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import {
  UIFormsErrorComponent,
  anchorErrorComponent,
} from './error-tailor.component';

import { SignInUIComponent } from './sign-in-ui/sign-in-ui.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      controlErrorComponentAnchorFn: anchorErrorComponent,
      controlErrorComponent: UIFormsErrorComponent,
      errors: {
        useValue: {
          email: 'This is not an email',
          required: 'This field is required',
        },
      },
    }),
  ],
  declarations: [SignInUIComponent, ProgressBarComponent],
  exports: [SignInUIComponent, ProgressBarComponent],
})
export class UIModule {}
