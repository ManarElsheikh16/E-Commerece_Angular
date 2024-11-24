import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditDebitComponent } from './cardit-debit.component';

describe('CarditDebitComponent', () => {
  let component: CarditDebitComponent;
  let fixture: ComponentFixture<CarditDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarditDebitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarditDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
