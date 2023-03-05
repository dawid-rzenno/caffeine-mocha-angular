import {TestBed} from '@angular/core/testing';

import {StatusInterceptor} from './status.interceptor';

describe('StatusInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StatusInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: StatusInterceptor = TestBed.inject(StatusInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
