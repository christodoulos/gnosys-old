import { Component } from '@angular/core';
import { UserService } from '@gnosys/state';

@Component({
  selector: 'gnosys-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent {
  constructor(private userService: UserService) {}

  doSignOut() {
    this.userService.signOut();
  }
}
