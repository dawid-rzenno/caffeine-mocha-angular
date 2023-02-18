import {TestBed} from '@angular/core/testing';

import {BudgetResolver} from './budget.resolver';

describe('BudgetResolver', () => {
  let resolver: BudgetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BudgetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
