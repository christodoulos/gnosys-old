import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { LandingSidebarMenu } from '@gnosys/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnosys-landing-sidebar-ui',
  templateUrl: './landing-sidebar-ui.component.html',
  styleUrls: ['./landing-sidebar-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingSidebarUiComponent {
  @Input() menu$: Observable<LandingSidebarMenu> | undefined;
}
