import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainArr = [ { text:"first"}, { text:"second"} , {text: 'third'} ];
  // firstArr = [];
  secondArr = [];
  selectAllBool = true;
  deselectAllBool = false;
  constructor(){

  }

  findIndex(id){
    if(this.mainArr.length > 0){
      this.secondArr.push(this.mainArr[id])
      this.mainArr.splice(id, 1);
    }
  }

  resendIndex(id){
    if(this.secondArr.length > 0){
      this.mainArr.push(this.secondArr[id]);
      this.secondArr.splice(id,1);
    }
  }

  selectAll(){
    this.secondArr = this.mainArr.concat(this.secondArr);
    this.mainArr = [];
    this.selectAllBool = false;
    this.deselectAllBool = true    
  }

  deselectAll(){
    this.mainArr = this.secondArr.concat(this.mainArr);
    this.secondArr = [];
    this.deselectAllBool = false;
    this.selectAllBool = true;
  }



}

