import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-reusable',
  templateUrl: './first-reusable.component.html',
  styleUrls: ['./first-reusable.component.css'], 
  inputs: ['item', 'id'],
  outputs: ['sendItem']
})
export class FirstReusableComponent {

  constructor() { }
  item:string
  id:string
  sendItem = new EventEmitter();

  sendItemToParent(id){
    this.sendItem.emit(id);
  }



}
