import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnosys-user-topbar-ui',
  templateUrl: './user-topbar-ui.component.html',
  styleUrls: ['./user-topbar-ui.component.css'],
})
export class UserTopbarUiComponent {
  @Input() photoURL$: Observable<string> | undefined;
  dropDownVisible = false;

  toggleDropDown() {
    this.dropDownVisible = !this.dropDownVisible;
  }
}
