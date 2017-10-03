import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private flashMessage:FlashMessagesService) { }

  @ViewChild('f') ngForm: NgForm;

  ngOnInit() {
  }

  onRegister() {
    const { username, email, password, name } = this.ngForm.value;
    const user = {
      username:username,
      email:email,
      password:password,
      name:name
    }
    this.authService.registerUser(user).subscribe((res)=>{
      this.router.navigate(['/login']);
    },(err)=>{

    })
  }
}
