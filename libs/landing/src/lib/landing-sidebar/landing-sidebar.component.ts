import { Component } from '@angular/core';
import { UIQuery } from '@gnosys/state';

@Component({
  selector: 'gnosys-landing-sidebar',
  templateUrl: './landing-sidebar.component.html',
  styleUrls: ['./landing-sidebar.component.css'],
})
export class LandingSidebarComponent {
  entries$ = this.uiQuery.landingSidebar$;
  constructor(private uiQuery: UIQuery) {}
}
