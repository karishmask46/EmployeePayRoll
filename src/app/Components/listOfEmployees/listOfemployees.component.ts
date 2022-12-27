import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './listOfemployees.component.html',
  styleUrls: ['./listOfemployees.component.scss']
})
export class SecondPageComponent implements OnInit {
  constructor(private getdata: UserService) { }
  array: any;
  deletedetails: any;
  ngOnInit(): void {
    this.getdetails();
  }
  getdetails() {
    this.getdata.employeeget().subscribe((result: any) => {
      console.log(result);
      this.array = result
    })
  }
  receivemessage(event: any) {
    this.getdetails()
  }
  reciveupdate(event:any){
    this.getdetails();
  }

}
