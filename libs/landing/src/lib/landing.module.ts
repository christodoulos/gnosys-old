import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { UIModule } from '@gnosys/ui';
import { StateModule } from '@gnosys/state';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, UIModule, StateModule],
  declarations: [LandingComponent, SignInComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
