import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentDateService } from './current-date.service';

describe('CurrentDateService', () => {
  let service: CurrentDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should return a Date',
    waitForAsync(
      inject([CurrentDateService], (service: CurrentDateService) => {
        const serviceSubscriber = service
          .getClock()
          .subscribe((result) => expect(result instanceof Date).toBeTrue());
        setTimeout(() => serviceSubscriber.unsubscribe(), 4000);
      })
    )
  );

  it(
    'should tick every second',
    waitForAsync(
      inject([CurrentDateService], (service: CurrentDateService) => {
        let counter = 0;
        const serviceSubscriber = service.getClock().subscribe(() => counter++);
        setTimeout(() => {
          serviceSubscriber.unsubscribe();
          expect(counter).toBe(3);
        }, 3300);
      })
    )
  );
});
