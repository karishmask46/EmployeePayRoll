import { Component, Inject, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/Service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
   Name:any;
Dept:any;
salary:any;
Notes:any
date:any;
gender:any;
profile:any;
empid:any;
  constructor( private edit:UserService, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
   this.Name=this.data.Name
   this.Dept=this.data.Dept
   this.salary=this.data.salary
   this.Notes=this.data.number
   this.gender=this.data.Gender
this.date=this.data.Datename
  this.profile=this.data.Profile
  this.empid=this.data.id
  }
  onClick(empiid:any): void {
    console.log(this.data);
    let dailog={
    //  empid:this.empid,
    Name:this.Name,
    Dept:this.Dept,
    salary:this.salary,
    number:this.Notes,
    Gender:this.gender,
    Datename:this.date,
    Profile:this.data.Profile,
  }
    this.edit.editemployee(dailog,empiid).subscribe((response:any)=>{
      console.log(response);
      
    })
    this.dialogRef.close();  
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
