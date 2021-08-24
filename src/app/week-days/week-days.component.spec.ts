import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDaysComponent } from './week-days.component';

describe('WeekDaysComponent', () => {
  let component: WeekDaysComponent;
  let fixture: ComponentFixture<WeekDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeekDaysComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('1995-12-16T23:59:30'));
    fixture = TestBed.createComponent(WeekDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 7 days', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.weekday').length).toBe(7);
  });

  it('should have a highlight', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.highlight').length).toBe(1);
  });

  it('should highlight the correct day', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.highlight').textContent).toContain('Sat');
  });

  it('should automatically update to the right day', () => {
    const compiled = fixture.nativeElement;
    // Next day
    jasmine.clock().tick(40 * 1000);
    fixture.detectChanges();
    expect(compiled.querySelector('.highlight').textContent).toContain('Sun');
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });
});
