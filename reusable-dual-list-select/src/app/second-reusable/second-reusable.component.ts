import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-reusable',
  templateUrl: './second-reusable.component.html',
  styleUrls: ['./second-reusable.component.css'],
  inputs: ['item', 'id'],
  outputs: ['resendItem']

})
export class SecondReusableComponent implements OnInit {

  constructor() { }
  item:string
  id:string
  resendItem = new EventEmitter();
  ngOnInit() {
  }

  resendItemToParent(id){
    this.resendItem.emit(id);
  }

}
