import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidateService } from '../../service/validate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private validateService:ValidateService) { }

  @ViewChild('f') ngForm:NgForm;

  ngOnInit() {
  }

  onRegister(){
  }
}