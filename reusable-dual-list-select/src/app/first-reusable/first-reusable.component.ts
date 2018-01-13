import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-reusable',
  templateUrl: './first-reusable.component.html',
  styleUrls: ['./first-reusable.component.css'], 
  inputs: ['item', 'id'],
  outputs: ['findIndex']
})
export class FirstReusableComponent {

  constructor() { }
  item:string
  id:string
  findIndex = new EventEmitter();

  sendIndex(id){
    this.findIndex.emit(id);
  }



}
