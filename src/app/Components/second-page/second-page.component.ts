import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  constructor(private getdata:UserService) { }
  array:any;
  ngOnInit(): void {
    this.getdetails();
  }
  getdetails(){
    this.getdata.employeeget().subscribe((result:any)=>{
      console.log(result);
       this.array=result
    })
    console.log(this.array);
 
  }
 
}
