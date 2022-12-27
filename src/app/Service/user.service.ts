import {  HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpservice:HttpClient) { 
  }
  employee(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpservice.post('http://localhost:3000/employees',data,header)
  }
  employeeget() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    }
    return this.httpservice.get('http://localhost:3000/employees',header)
  }
  deleteemployee(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    }
    console.log(data);
    
    return this.httpservice.delete(`http://localhost:3000/employees/${data}`,header)
  }
  editemployee(data:any,empid:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    }
    return this.httpservice.put(`http://localhost:3000/employees/${empid}`,data,header)
  }
  signup(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    }
    return this.httpservice.post('http://localhost:3000/userdetails', data,header)
  }
  login(data:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    
    }
    return this.httpservice.get('http://localhost:3000/userdetails',header)
  }

}
