import { TestBed } from '@angular/core/testing';

import { SimpleInputTableService } from './simple-input-table.service';

describe('SimpleInputTableService', () => {
  let service: SimpleInputTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleInputTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
