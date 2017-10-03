import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') ngForm: NgForm;

  constructor(private flashMessageService:FlashMessagesService) { }

  ngOnInit() {
  }

  onLogin() {
    const { username, password } = this.ngForm.value;
    this.flashMessageService.show('logged In',{ cssClass: 'alert-success' })
  }
}
