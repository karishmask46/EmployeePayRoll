import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  employee(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('http://localhost:3000/employees',data,header)
  }
  employeeget(){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('http://localhost:3000/employees',header)
  }
}
