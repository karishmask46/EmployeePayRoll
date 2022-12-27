import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPAgeComponent } from './employeedetails.component';

describe('FirstPAgeComponent', () => {
  let component: FirstPAgeComponent;
  let fixture: ComponentFixture<FirstPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
