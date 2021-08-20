import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentDateService {
  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000)
      .pipe(timeInterval())
      .pipe(map(() => new Date(Date.now())));
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
