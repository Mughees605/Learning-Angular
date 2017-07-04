import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
   error:any

  @ViewChild('f') singupForm: NgForm
  constructor(private af: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.singupForm.valid) {
      console.log(this.singupForm.value)
      this
        .af
        .auth
        .createUserWithEmailAndPassword(this.singupForm.value.useremail, this.singupForm.value.password)
        .then((success) => this.router.navigate(['/login']))
        .catch((err)=>this.error = err)
    }
  }


}
