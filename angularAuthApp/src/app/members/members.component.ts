import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public af:AngularFireAuth) {
    this.af.authState.subscribe(
      (auth)=>{
        if(auth){
          console.log(auth)
        }
      }
    )
   }

  ngOnInit() {
  }


}
