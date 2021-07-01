import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'gnosys-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
