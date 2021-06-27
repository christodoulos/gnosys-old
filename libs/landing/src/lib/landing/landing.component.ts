import { Component, OnInit } from '@angular/core';
import { AuthService } from '@gnosys/services';
import { UserService } from '@gnosys/state';

@Component({
  selector: 'gnosys-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    // this.userService.updateUser({ email: 'chfrag@mail.ntua.gr' });
  }
}
