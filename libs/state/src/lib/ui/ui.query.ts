import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UIStore } from './ui.store';
import { GnosysUI } from './ui.model';

@Injectable({ providedIn: 'root' })
export class UIQuery extends Query<GnosysUI> {
  landingSidebar$ = this.select((state) => state.landingSidebarMenu);

  constructor(protected store: UIStore) {
    super(store);
  }
}
