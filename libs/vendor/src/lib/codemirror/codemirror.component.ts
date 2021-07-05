import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'gnosys-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodemirrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
