import { Component, OnInit, OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  inputs: ['items']
})
export class MainComponent implements OnChanges{

  items: Array<any>;
  secondArr = [];
  selectAllBool = true;
  deselectAllBool = false;
  upArrow = false;
  downArrow = false;
  filteredItems:Array<any> = [];

  constructor() {
  }

  ngOnChanges(){
    this.assignCopy();    
  }

  sendItem(id) {
    if (this.items.length > 0) {
      this.secondArr.push(this.filteredItems[id])
      this.filteredItems.splice(id, 1);
      this.downTrueUpFalse();
    }
  }

  resendItem(id) {
    if (this.secondArr.length > 0) {
      this.filteredItems.push(this.secondArr[id]);
      this.secondArr.splice(id, 1);
      this.downFalseUpTrue();
    }
  }

  selectAll() {
    this.secondArr = this.filteredItems.concat(this.secondArr);
    this.filteredItems = [];
    this.downTrueUpFalse();
  }

  deselectAll() {
    this.filteredItems = this.secondArr.concat(this.filteredItems);
    this.secondArr = [];
    this.downFalseUpTrue();
  }
  
  downTrueUpFalse() {
    this.downArrow = true;
    this.upArrow = false;
  }

  downFalseUpTrue() {
    this.downArrow = false;
    this.upArrow = true;
  }

  assignCopy(){
   this.filteredItems = Object.assign([], this.items);
  }

  filterItem(value){
      if(!value) this.assignCopy(); 
      this.filteredItems = Object.assign([], this.items).filter(
      item => item.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
  }
}

