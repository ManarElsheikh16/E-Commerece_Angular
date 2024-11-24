import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachOnDeliveryComponent } from './cach-on-delivery.component';

describe('CachOnDeliveryComponent', () => {
  let component: CachOnDeliveryComponent;
  let fixture: ComponentFixture<CachOnDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachOnDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachOnDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
