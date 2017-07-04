import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.css']
})
export class EmailComponentComponent implements OnInit {

  err:any
    
  @ViewChild('f') loginForm:NgForm

  constructor(private af:AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this
    .af
    .auth
    .signInWithEmailAndPassword(this.loginForm.value.useremail,this.loginForm.value.password)
    .then((success)=>this.router.navigate(['/members']))
    .catch((err)=>this.err=err)
  }
  
}
