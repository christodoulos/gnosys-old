import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [CommonModule, LandingRoutingModule],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
