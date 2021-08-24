export class WeekDay extends Date {
  constructor(weekDayNumber: number) {
    super(2021, 7, 1);
    super.setDate(weekDayNumber + 2);
  }
}
