import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Codemirror } from './codemirror.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'codemirror' })
export class CodemirrorStore extends Store<Codemirror> {}
