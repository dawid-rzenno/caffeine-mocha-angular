import {TestBed} from '@angular/core/testing';

import {BudgetDetailsFormService} from './budget-details-form.service';

describe('BudgetGeneralControlService', () => {
  let service: BudgetDetailsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetDetailsFormService]
    });
    service = TestBed.inject(BudgetDetailsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
