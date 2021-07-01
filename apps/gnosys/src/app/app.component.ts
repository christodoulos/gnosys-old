import { Component } from '@angular/core';

@Component({
  selector: 'gnosys-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gnosys';
  offCanvasVisible = false;

  toggleOffCanvas() {
    this.offCanvasVisible = !this.offCanvasVisible;
  }
}
