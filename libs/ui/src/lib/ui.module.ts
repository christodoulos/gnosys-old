import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';

import {
  UIFormsErrorComponent,
  anchorErrorComponent,
} from './error-tailor.component';

import { StateModule } from '@gnosys/state';

import { SignInUIComponent } from './sign-in-ui/sign-in-ui.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { GnosysLogoComponent } from './gnosys-logo/gnosys-logo.component';
import { UserSidebarUIComponent } from './user-sidebar-ui/user-sidebar-ui.component';

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
    StateModule,
  ],
  declarations: [
    SignInUIComponent,
    ProgressBarComponent,
    GnosysLogoComponent,
    UserSidebarUIComponent,
  ],
  exports: [
    SignInUIComponent,
    ProgressBarComponent,
    GnosysLogoComponent,
    UserSidebarUIComponent,
  ],
})
export class UIModule {}
