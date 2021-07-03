import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopbarUiComponent } from './user-topbar-ui.component';

describe('UserTopbarUiComponent', () => {
  let component: UserTopbarUiComponent;
  let fixture: ComponentFixture<UserTopbarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTopbarUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopbarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
