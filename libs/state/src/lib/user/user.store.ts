import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from './user.model';

export const createInitialUser = () =>
  ({
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
    linkedinURL: '',
    photoURL: '',
    displayName: '',
    emailVerified: false,
    loading: false,
  } as User);

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user', resettable: true })
export class UserStore extends Store<User> {
  constructor() {
    super(createInitialUser());
  }
}
