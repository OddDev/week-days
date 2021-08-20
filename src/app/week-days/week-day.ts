export class WeekDay extends Date {
  constructor(weekDayNumber: number) {
    super();
    super.setDate(weekDayNumber + 2);
  }
}
