import { Injectable } from '@angular/core';
import { CodemirrorStore } from './codemirror.store';

@Injectable({ providedIn: 'root' })
export class CodemirrorService {
  constructor(private codemirrorStore: CodemirrorStore) {}

  updateCode(code: string) {
    this.codemirrorStore.update({ code });
  }

  updateCurrCode(currcode: string) {
    this.codemirrorStore.update({ currcode });
  }

  updateName(name: string) {
    this.codemirrorStore.update({ name });
  }
}
