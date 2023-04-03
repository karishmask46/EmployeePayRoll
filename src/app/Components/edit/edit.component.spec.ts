import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],imports:[HttpClientModule,MatSnackBarModule,MatDialogModule,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
