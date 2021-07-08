import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gnosys-user-sidebar-ui',
  templateUrl: './user-sidebar-ui.component.html',
  styleUrls: ['./user-sidebar-ui.component.css'],
})
export class UserSidebarUIComponent {
  @Output() signOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitSignOut() {
    this.signOut.emit(true);
  }
}
