import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { USER_LOGOUT_ACTION } from '@gnosys/state';

@Component({
  selector: 'gnosys-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent {
  constructor(private actions: Actions) {}

  doSignOut() {
    this.actions.dispatch(USER_LOGOUT_ACTION);
  }
}
