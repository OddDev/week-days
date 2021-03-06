import { WeekDay } from './week-day';

describe('WeekDay', () => {
  it('should create an instance', () => {
    expect(new WeekDay(0)).toBeTruthy();
  });
  it('should start the week with Monday', () => {
    expect(
      new WeekDay(0).toLocaleDateString('en-EN', { weekday: 'long' })
    ).toBe('Monday');
  });
  it('should start the week all over', () => {
    expect(
      new WeekDay(8).toLocaleDateString('en-EN', { weekday: 'long' })
    ).toBe('Tuesday');
  });
  it('should respect the past', () => {
    expect(
      new WeekDay(-2).toLocaleDateString('en-EN', { weekday: 'long' })
    ).toBe('Saturday');
  });
  it('should work with every date', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('1995-12-16T23:59:30'));
    console.log(new Date());
    expect(
      new WeekDay(0).toLocaleDateString('en-EN', { weekday: 'long' })
    ).toBe('Monday');
    jasmine.clock().mockDate(new Date('1702-02-21T01:01:11'));
    console.log(new Date());
    expect(
      new WeekDay(2).toLocaleDateString('en-EN', { weekday: 'long' })
    ).toBe('Wednesday');
    jasmine.clock().mockDate(new Date(Math.random() * 1519211809934));
    console.log(new Date());
    expect(
      new WeekDay(4).toLocaleDateString('en-EN', { weekday: 'long' })
    ).toBe('Friday');
    jasmine.clock().uninstall();
  });
});
