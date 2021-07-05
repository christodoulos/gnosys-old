import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateModule } from '@gnosys/state';

import { CodemirrorComponent } from './codemirror/codemirror.component';

@NgModule({
  imports: [CommonModule, StateModule],
  declarations: [CodemirrorComponent],
  exports: [CodemirrorComponent],
})
export class VendorModule {}
