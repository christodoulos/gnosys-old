import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateModule } from '@gnosys/state';

import { CodemirrorComponent } from './codemirror/codemirror.component';
import { BrythonRunnerComponent } from './brython-runner/brython-runner.component';

@NgModule({
  imports: [CommonModule, StateModule],
  declarations: [CodemirrorComponent, BrythonRunnerComponent],
  exports: [CodemirrorComponent, BrythonRunnerComponent],
})
export class VendorModule {}
