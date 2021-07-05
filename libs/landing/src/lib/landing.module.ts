import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';
import { VendorModule } from '@gnosys/vendor';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingSidebarComponent } from './landing-sidebar/landing-sidebar.component';
import { LandingProgressbarComponent } from './landing-progressbar/landing-progressbar.component';
import { LandingTopbarComponent } from './landing-topbar/landing-topbar.component';

const redirectLoggedInToUser = () => redirectLoggedInTo(['user']);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: '',
        component: LandingSidebarComponent,
        outlet: 'sidebar',
        ...canActivate(redirectLoggedInToUser),
      },
      {
        path: '',
        component: LandingTopbarComponent,
        outlet: 'topbar',
        ...canActivate(redirectLoggedInToUser),
      },
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
    VendorModule,
  ],
  declarations: [
    LandingComponent,
    SignInComponent,
    LandingSidebarComponent,
    LandingProgressbarComponent,
    LandingTopbarComponent,
  ],
})
export class LandingModule {}
