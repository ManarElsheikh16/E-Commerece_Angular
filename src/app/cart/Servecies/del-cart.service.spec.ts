import { TestBed } from '@angular/core/testing';

import { DelCartService } from './del-cart.service';

describe('DelCartService', () => {
  let service: DelCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
