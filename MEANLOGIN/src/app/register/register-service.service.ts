import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { UserModel } from '../shared/user.model'
import 'rxjs/Rx'
const headers = new Headers({ "Content-Type": "application/json" });

@Injectable()
export class RegisterServiceService {

  constructor(private http:Http) { }
   
  registerUser(user:UserModel){
     return this.http.post("https://serene-refuge-41977.herokuapp.com/api/register",user,{headers:headers})
     .map((res)=>{
       return res.json();
     })
  }
}
