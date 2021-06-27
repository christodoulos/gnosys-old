import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { UserEffects } from './auth/user.effects';

@NgModule({
  imports: [CommonModule, AkitaNgEffectsModule.forFeature([UserEffects])],
})
export class StateModule {}
