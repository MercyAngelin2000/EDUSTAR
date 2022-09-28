import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  data: any;
  token: any;
  constructor(private http:HttpClient) { }
  // base ="https://sclpropython.herokuapp.com"
  base = "http://127.0.0.1:8000"

  login(data:any,url:any){
    return this.http.post(this.base+url,data); 
  }   
  post(data:any,url:any){
    return this.http.post(this.base+url,data,{headers:new HttpHeaders({"Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }     
  getmethod(url:any){
    console.log(localStorage.getItem('token'));
    return this.http.get(this.base+url,{headers:new HttpHeaders({"Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }

  up_userprofile(url:any,data:any){
    console.log(this.base+url,data);
    
    return this.http.put(this.base+url,data,{headers:new HttpHeaders({"Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }

  del_userprofile(url:any){
    return this.http.delete(this.base+url,{headers:new HttpHeaders({"Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }

}
