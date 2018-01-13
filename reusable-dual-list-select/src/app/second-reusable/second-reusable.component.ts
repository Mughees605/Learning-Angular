import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-reusable',
  templateUrl: './second-reusable.component.html',
  styleUrls: ['./second-reusable.component.css'],
  inputs: ['item', 'id'],
  outputs: ['resendIndex']

})
export class SecondReusableComponent implements OnInit {

  constructor() { }
  item:string
  id:string
  resendIndex = new EventEmitter();
  ngOnInit() {
  }

  sendIndex(id){
    this.resendIndex.emit(id);
  }

}
