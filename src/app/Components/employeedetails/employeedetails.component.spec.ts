import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FirstPAgeComponent } from './employeedetails.component';

describe('FirstPAgeComponent', () => {
  let component: FirstPAgeComponent;
  let fixture: ComponentFixture<FirstPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPAgeComponent ],imports:[HttpClientModule,MatDialogModule,MatSnackBarModule]
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
