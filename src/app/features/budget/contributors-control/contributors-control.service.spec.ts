import { TestBed } from '@angular/core/testing';

import { ContributorsControlService } from './contributors-control.service';

describe('ContributorsControlService', () => {
  let service: ContributorsControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributorsControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
