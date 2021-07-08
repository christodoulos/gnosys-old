import { Component } from '@angular/core';
import { UserQuery, UserService } from '@gnosys/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnosys-user-topbar',
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css'],
})
export class UserTopbarComponent {
  photoURL$: Observable<string>;
  displayName$: Observable<string>;
  constructor(private userQuery: UserQuery, private userService: UserService) {
    this.photoURL$ = this.userQuery.userPhotoURL$;
    this.displayName$ = this.userQuery.userDisplayName$;
  }
  doSignOut() {
    this.userService.signOut();
  }
}
