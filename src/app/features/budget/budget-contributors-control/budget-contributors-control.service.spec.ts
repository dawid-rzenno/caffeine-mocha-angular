import { TestBed } from '@angular/core/testing';

import { BudgetContributorsControlService } from './budget-contributors-control.service';

describe('BudgetContributorsControlService', () => {
  let service: BudgetContributorsControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetContributorsControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
