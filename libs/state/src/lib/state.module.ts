import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { AlertEffects } from './alert/alert.effects';

@NgModule({
  imports: [CommonModule, AkitaNgEffectsModule.forFeature([AlertEffects])],
})
export class StateModule {}
