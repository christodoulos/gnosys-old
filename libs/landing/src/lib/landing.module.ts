import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
      },
      { path: 'signin', component: SignInComponent },
    ]),
    UIModule,
    StateModule,
  ],
  declarations: [LandingComponent, SignInComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
