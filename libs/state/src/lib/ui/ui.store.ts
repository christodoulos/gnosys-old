import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { GnosysUI } from './ui.model';

import landingSidebarEntries from './landing/sidebar/entries.json';

const uiState = () =>
  ({
    landingSidebarMenu: { entries: landingSidebarEntries, active: 0 },
  } as GnosysUI);

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UIStore extends Store<GnosysUI> {
  constructor() {
    super(uiState());
  }
}
