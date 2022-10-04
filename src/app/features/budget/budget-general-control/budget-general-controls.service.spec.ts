import { TestBed } from '@angular/core/testing';

import { BudgetGeneralControlService } from './budget-general-control.service';

describe('BudgetGeneralControlService', () => {
  let service: BudgetGeneralControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetGeneralControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
