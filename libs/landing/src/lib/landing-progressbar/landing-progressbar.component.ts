import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'gnosys-landing-progressbar',
  templateUrl: './landing-progressbar.component.html',
  styleUrls: ['./landing-progressbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProgressbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
