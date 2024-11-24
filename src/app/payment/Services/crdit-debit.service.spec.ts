import { TestBed } from '@angular/core/testing';

import { CrditDebitService } from './crdit-debit.service';

describe('CrditDebitService', () => {
  let service: CrditDebitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrditDebitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
