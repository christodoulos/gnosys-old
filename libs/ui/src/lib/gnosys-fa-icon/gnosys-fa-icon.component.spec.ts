import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnosysFaIconComponent } from './gnosys-fa-icon.component';

describe('GnosysFaIconComponent', () => {
  let component: GnosysFaIconComponent;
  let fixture: ComponentFixture<GnosysFaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GnosysFaIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnosysFaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
