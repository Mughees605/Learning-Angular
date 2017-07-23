import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserModel } from "../shared/user.model"
import { RegisterServiceService } from './register-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterServiceService) { }

  @ViewChild('f') ngForm:NgForm

  ngOnInit() {
  }
  
  registerUser(form:NgForm){
    const { username , password , firstname, lastname } = form.value;
    let newUser = new UserModel(username,password,firstname,lastname);
    this.registerService.registerUser(newUser).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err)
      }
    )

  }
}
