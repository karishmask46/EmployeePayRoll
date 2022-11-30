import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private httpclient:HttpClient) { }
  postservice(url:any,data:any,options:any){
    return this.httpclient.post(url,options);
  }
  getservice(url:any,data:any,options:any){
    return this.httpclient.get(url&& options)
  }
}
