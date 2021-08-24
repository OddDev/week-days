import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentDateService {
  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(map(() => new Date()));
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
