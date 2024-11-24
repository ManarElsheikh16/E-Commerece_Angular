import { TestBed } from '@angular/core/testing';

import { PaybalService } from './paybal.service';

describe('PaybalService', () => {
  let service: PaybalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaybalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
