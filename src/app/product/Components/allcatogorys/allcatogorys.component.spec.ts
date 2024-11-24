import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcatogorysComponent } from './allcatogorys.component';

describe('AllcatogorysComponent', () => {
  let component: AllcatogorysComponent;
  let fixture: ComponentFixture<AllcatogorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcatogorysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcatogorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
