import { Component } from '@angular/core';
import { UserQuery } from '@gnosys/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'gnosys-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  userIsLoading$: Observable<boolean>;

  constructor(private userQuery: UserQuery) {
    console.log('AAAAAAAAA');
    this.userIsLoading$ = this.userQuery.loading$;
  }
}
