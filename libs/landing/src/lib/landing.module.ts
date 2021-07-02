import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingSidebarComponent } from './landing-sidebar/landing-sidebar.component';
import { LandingProgressbarComponent } from './landing-progressbar/landing-progressbar.component';

const redirectLoggedInToUser = () => redirectLoggedInTo(['user']);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent,
      },
      { path: '', component: LandingSidebarComponent, outlet: 'sidebar' },
      {
        path: '',
        component: LandingProgressbarComponent,
        outlet: 'progressbar',
      },
      {
        path: 'signin',
        component: SignInComponent,
        ...canActivate(redirectLoggedInToUser),
      },
    ]),
    UIModule,
    StateModule,
  ],
  declarations: [
    LandingComponent,
    SignInComponent,
    LandingSidebarComponent,
    LandingProgressbarComponent,
  ],
})
export class LandingModule {}
