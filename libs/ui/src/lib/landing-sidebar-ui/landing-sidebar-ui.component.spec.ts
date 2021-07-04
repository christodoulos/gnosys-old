import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSidebarUiComponent } from './landing-sidebar-ui.component';

describe('LandingSidebarUiComponent', () => {
  let component: LandingSidebarUiComponent;
  let fixture: ComponentFixture<LandingSidebarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingSidebarUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSidebarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
