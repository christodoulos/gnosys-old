import { Injectable } from '@angular/core';
import { GnosysUI } from './ui.model';
import { UIStore } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UIService {
  constructor(private uiStore: UIStore) {}

  updateUI(ui: Partial<GnosysUI>) {
    this.uiStore.update({ ...ui });
  }
}
