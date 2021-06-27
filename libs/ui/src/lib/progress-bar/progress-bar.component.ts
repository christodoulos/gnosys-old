import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'gnosys-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
