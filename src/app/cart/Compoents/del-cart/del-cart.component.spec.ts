import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCartComponent } from './del-cart.component';

describe('DelCartComponent', () => {
  let component: DelCartComponent;
  let fixture: ComponentFixture<DelCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
