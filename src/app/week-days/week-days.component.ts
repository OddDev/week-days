import { WeekDay } from './week-day';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrentDateService } from './current-date.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.css'],
})
export class WeekDaysComponent implements OnInit, OnDestroy {
  private _clockSubscription: Subscription = new Subscriber();

  weekDays: Array<WeekDay> = [];
  timeStamp: Date = new Date(Date.now());

  constructor(private currentDateService: CurrentDateService) {
    for (let index = 0; index < 7; index++)
      this.weekDays.push(new WeekDay(index));
  }

  ngOnInit(): void {
    this._clockSubscription = this.currentDateService
      .getClock()
      .subscribe((timeStamp) => (this.timeStamp = timeStamp));
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }

  isCurrentWeekday(weekDay: WeekDay): boolean {
    return weekDay.getDay() === this.timeStamp.getDay();
  }
}
