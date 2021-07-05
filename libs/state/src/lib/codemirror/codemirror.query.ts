import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Codemirror } from './codemirror.model';
import { CodemirrorStore } from './codemirror.store';

@Injectable({ providedIn: 'root' })
export class CodemirorQuery extends Query<Codemirror> {
  code$ = this.select((state) => state.code);
  currcode$ = this.select((state) => state.currcode);
  name$ = this.select((state) => state.name);
  constructor(protected store: CodemirrorStore) {
    super(store);
  }
}
