import { Injectable } from '@angular/core';
import { MainserviceService } from 'src/app/service/mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  constructor(private mainservice:MainserviceService) { }
  login(data:any){
    const url="/login"
    return this.mainservice.login(data,url); 
  }
  register(data:any){
    const url="/register"
    return this.mainservice.post(data,url); 
  }
  userprofile(){
    const path="/userprofile/"
    const url=path
    return this.mainservice.getmethod(url);
  }

  up_userprofile(data:any){
    const url="/up_userprofile/"
    // const url=con+data
    return this.mainservice.up_userprofile(url,data);
  }

  gen_info(data:any){
    const url="/sclprofile"
    return this.mainservice.post(data,url); 

  }
  sclprofile(){
    const url="/sclprofile/"
    return this.mainservice.getmethod(url);
  }
  del_userprofile(){
    const url="/del_userprofile/"
    return this.mainservice.del_userprofile(url);
  }

}
