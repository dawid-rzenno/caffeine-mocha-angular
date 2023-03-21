import {TestBed} from '@angular/core/testing';

import {BudgetContributorsFormService} from './budget-contributors-form.service';

describe('BudgetContributorsControlService', () => {
  let service: BudgetContributorsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetContributorsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
