import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnosys-user-topbar-ui',
  templateUrl: './user-topbar-ui.component.html',
  styleUrls: ['./user-topbar-ui.component.css'],
})
export class UserTopbarUiComponent {
  @Input() photoURL$: Observable<string> | undefined;
  @Input() displayName$: Observable<string> | undefined;
  @Output() signOut: EventEmitter<boolean> = new EventEmitter();
  dropDownVisible = false;

  toggleDropDown() {
    this.dropDownVisible = !this.dropDownVisible;
  }

  emitSignOut() {
    this.signOut.emit(true);
  }
}
