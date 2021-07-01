import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSidebarUIComponent } from './user-sidebar-ui.component';

describe('UserSidebarUIComponent', () => {
  let component: UserSidebarUIComponent;
  let fixture: ComponentFixture<UserSidebarUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSidebarUIComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSidebarUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
