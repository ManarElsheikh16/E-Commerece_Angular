import { TestBed } from '@angular/core/testing';

import { CashOnDeliveryService } from './cash-on-delivery.service';

describe('CashOnDeliveryService', () => {
  let service: CashOnDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashOnDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
