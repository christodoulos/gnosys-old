import { Injectable } from '@angular/core';
import { UserStore, createInitialUser } from './user.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore) {}

  setUserLoading(value: boolean) {
    this.userStore.update({ loading: value });
  }

  updateUser(user: Partial<User>) {
    this.userStore.update({ ...user, loading: false });
  }

  initializeUser() {
    this.userStore.update({ ...createInitialUser() });
  }
}
