import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/Service/user.service';

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
  constructor( private edit:UserService, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) { }

  ngOnInit(): void {
    console.log(this.data,this.data.id);
   this.Name=this.data.Name
   this.Dept=this.data.Dept
   this.salary=this.data.salary
   this.Notes=this.data.number
  }
  onClick(): void {
    console.log(this.Name,this.Dept);
    let data={
      noteId:this.data.id,
      Name:this.Name, 
      Dept:this.Dept,
      salary:this.salary,
      Notes:this.Notes
    }
    this.edit.editemployee(data).subscribe((response:any)=>{
      console.log(response);
      
    })
    this.dialogRef.close();  
  }
}
