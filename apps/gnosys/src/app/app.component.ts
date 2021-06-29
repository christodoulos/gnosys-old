import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { USER_LOGOUT_ACTION } from '@gnosys/state';

@Component({
  selector: 'gnosys-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gnosys';
  offCanvasVisible = false;

  constructor(private actions: Actions) {}

  toggleOffCanvas() {
    this.offCanvasVisible = !this.offCanvasVisible;
  }

  logout() {
    this.actions.dispatch(USER_LOGOUT_ACTION);
  }
}
