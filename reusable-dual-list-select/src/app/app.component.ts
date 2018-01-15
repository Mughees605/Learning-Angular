import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items:Array<any> = [ { text:"list"}, { text:"text"} , {text: 'commit'}, {text: 'fasdfsd'}, {text:"items"}, {text:"country"}, {text:"place"} ];

}

