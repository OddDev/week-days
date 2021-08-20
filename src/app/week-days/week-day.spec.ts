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
});
