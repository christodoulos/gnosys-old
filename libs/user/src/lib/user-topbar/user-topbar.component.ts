import { Component } from '@angular/core';
import { UserQuery } from '@gnosys/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnosys-user-topbar',
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css'],
})
export class UserTopbarComponent {
  photoURL$: Observable<string>;
  displayName$: Observable<string>;
  constructor(private userQuery: UserQuery) {
    this.photoURL$ = this.userQuery.userPhotoURL$;
    this.displayName$ = this.userQuery.userDisplayName$;
  }
}
