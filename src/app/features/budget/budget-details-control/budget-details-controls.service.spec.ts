import { TestBed } from '@angular/core/testing';

import { BudgetDetailsControlService } from './budget-details-control.service';

describe('BudgetDetailsControlService', () => {
  let service: BudgetDetailsControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetDetailsControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
