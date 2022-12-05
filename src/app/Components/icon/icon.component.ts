import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { EditComponent } from '../edit/edit.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() childmessage:any;
  @Output() deletedetails = new EventEmitter<any>();
 Array:any
 deletearray:any;
  constructor(private deleteemp:UserService,public dialog: MatDialog) { }
  ngOnInit(): void {
    
  }
  deleteempl(emploid:any){
    let data={
      empId:[this.childmessage.id]
    }
    console.log(this.childmessage.id);
    
    console.log(data.empId);
    console.log(data);
    this.deleteemp.deleteemployee(emploid).subscribe((result:any)=>{
      console.log(result);
      this.deletearray=result;
      this.deletedetails.emit(result);
    }) 
  }
  openDialog(empdata:any): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '800px',
      height:'80px',
      data:empdata
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }
}
