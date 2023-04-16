import {TestBed} from '@angular/core/testing';

import {BudgetSummaryService} from './budget-summary.service';

describe('BudgetSummaryService', () => {
  let service: BudgetSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
