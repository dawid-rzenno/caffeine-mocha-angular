import {TestBed} from '@angular/core/testing';

import {BudgetFormResolver} from './budget-form.resolver';

describe('BudgetFormResolver', () => {
  let resolver: BudgetFormResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BudgetFormResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
