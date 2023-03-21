import {TestBed} from '@angular/core/testing';

import {SimpleInputTableFormService} from './simple-input-table-form.service';

describe('SimpleInputTableService', () => {
  let service: SimpleInputTableFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleInputTableFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
