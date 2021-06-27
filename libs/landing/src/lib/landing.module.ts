import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { UIModule } from '@gnosys/ui';

import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, UIModule],
  declarations: [LandingComponent, SignInComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
