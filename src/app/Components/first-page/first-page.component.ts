import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
interface salary {
  value: string;
  viewValue: string;
}
interface Days {
  value: string;
  viewValue: string;
}
interface Month {
  value: string;
  viewValue: string;
}
interface Year {
  value: string;
  viewValue: string;
}
interface profilepic {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})

export class FirstPAgeComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void { }


  Salaries: salary[] = [
    { value: '10000', viewValue: '10000' },
    { value: '20000', viewValue: '20000' },
    { value: '30000', viewValue: '30000' },
    { value: '40000', viewValue: '40000' },
    { value: '50000', viewValue: '50000' },
    { value: '60000', viewValue: '60000' },
    { value: '70000', viewValue: '70000' },
    { value: '80000', viewValue: '80000' },
    { value: '90000', viewValue: '90000' },
    { value: '100000', viewValue: '100000' },
    { value: '110000', viewValue: '110000' },
  ];
  Day: Days[] = [
    { value: '0', viewValue: '1' },
    { value: '1', viewValue: '2' },
    { value: '2', viewValue: '3' },
    { value: '3', viewValue: '4' },
    { value: '4', viewValue: '5' },
    { value: '5', viewValue: '6' },
    { value: '6', viewValue: '7' },
    { value: '7', viewValue: '8' },
    { value: '8', viewValue: '9' },
    { value: '9', viewValue: '10' },
    { value: '10', viewValue: '11' },
    { value: '11', viewValue: '12' },
    { value: '12', viewValue: '13' },
    { value: '13', viewValue: '14' },
    { value: '14', viewValue: '15' },
    { value: '15', viewValue: '16' },
    { value: '16', viewValue: '17' },
    { value: '17', viewValue: '18' },
    { value: '18', viewValue: '19' },
    { value: '19', viewValue: '20' },
    { value: '20', viewValue: '21' },
    { value: '21', viewValue: '22' },
    { value: '22', viewValue: '23' },
    { value: '23', viewValue: '24' },
    { value: '24', viewValue: '25' },
    { value: '25', viewValue: '26' },
    { value: '26', viewValue: '27' },
    { value: '27', viewValue: '28' },
    { value: '28', viewValue: '29' },
    { value: '29', viewValue: '30' },
    { value: '30', viewValue: '31' },
  ];
  month: Month[] = [
    { value: '0', viewValue: 'January' },
    { value: '1', viewValue: 'February' },
    { value: '2', viewValue: 'March' },
    { value: '3', viewValue: 'April' },
    { value: '4', viewValue: 'May' },
    { value: '5', viewValue: 'June' },
    { value: '6', viewValue: 'July' },
    { value: '7', viewValue: 'August' },
    { value: '8', viewValue: 'September' },
    { value: '9', viewValue: 'October' },
    { value: '10', viewValue: 'November' },
    { value: '11', viewValue: 'December' },
  ];
  year: Year[] = [
    { value: '0', viewValue: '2009' },
    { value: '1', viewValue: '2010' },
    { value: '2', viewValue: '2011' },
    { value: '3', viewValue: '2012' },
    { value: '4', viewValue: '2013' },
    { value: '5', viewValue: '2014' },
    { value: '6', viewValue: '2015' },
    { value: '7', viewValue: '2016' },
    { value: '8', viewValue: '2017' },
    { value: '9', viewValue: '2018' },
    { value: '10', viewValue: '2019' },
    { value: '11', viewValue: '2020' },
    { value: '12', viewValue: '2021' },
    { value: '13', viewValue: '2022' },
  ];
  Name: string = "";
  number: string = '';
  Profile: any;
  Gender: any = '';
  Dept: any = '';
  salary: any = '';
  day: any;
  Month: any;
  Year: any;
date(){
  return (this.day+'/'+this.Month+'/'+this.Year)
}
 
  setValue() {
    let data = {
      Name: this.Name,
      number: this.number,
      Profile: this.Profile,
      Gender: this.Gender,
      Dept: this.Dept,
      salary: this.salary,
      Dayname: this.day,
      Monthname: this.Month,
      Yearname: this.Year,
      Datename:this.date()
    }
    this.user.employee(data).subscribe((result: any) => {
    console.log(result);
    })
  }


}

