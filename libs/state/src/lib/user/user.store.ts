import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user', resettable: true })
export class UserStore extends Store<User> {
  constructor() {
    super({ loading: false });
  }
}
