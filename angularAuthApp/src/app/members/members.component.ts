import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public af:AngularFireAuth, private router:Router) {
    this.af.authState.subscribe(
      (auth)=>{
        if(auth){
          console.log(auth.email)
        }
      }
    )
   }
   onSignOut(){
     this
     .af
     .auth
     .signOut()
     .then(()=>this.router.navigate(['/login']))
     .catch((err)=> console.log(err))
   }

  ngOnInit() {
  }


}
