import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  inputs: ['mainArr']
})
export class MainComponent {
  
  mainArr:Array<any>;
  secondArr = [];
  selectAllBool = true;
  deselectAllBool = false;
  upArrow = false;
  downArrow = false;
  constructor(){

  }

  findIndex(id){
    if(this.mainArr.length > 0){
      this.secondArr.push(this.mainArr[id])
      this.mainArr.splice(id, 1);
      this.downArrow = true;
      this.upArrow = false;
    }
  }

  resendIndex(id){
    if(this.secondArr.length > 0){
      this.mainArr.push(this.secondArr[id]);
      this.secondArr.splice(id,1);
      this.downArrow = false;
      this.upArrow = true;
    }
  }

  selectAll(){
    this.secondArr = this.mainArr.concat(this.secondArr);
    this.mainArr = [];
    this.downArrow = true;
    this.upArrow = false;
  }

  deselectAll(){
    this.mainArr = this.secondArr.concat(this.mainArr);
    this.secondArr = [];
    this.downArrow = false;
    this.upArrow = true;
  }

}
