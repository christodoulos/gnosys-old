import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingSidebarComponent } from './landing-sidebar/landing-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
      },
      { path: '', component: LandingSidebarComponent, outlet: 'sidebar' },
      { path: 'signin', component: SignInComponent },
    ]),
    UIModule,
    StateModule,
  ],
  declarations: [LandingComponent, SignInComponent, LandingSidebarComponent],
})
export class LandingModule {}
