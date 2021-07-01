import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnosysLogoComponent } from './gnosys-logo.component';

describe('GnosysLogoComponent', () => {
  let component: GnosysLogoComponent;
  let fixture: ComponentFixture<GnosysLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GnosysLogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnosysLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
