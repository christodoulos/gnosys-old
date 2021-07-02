import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingProgressbarComponent } from './landing-progressbar.component';

describe('LandingProgressbarComponent', () => {
  let component: LandingProgressbarComponent;
  let fixture: ComponentFixture<LandingProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingProgressbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
