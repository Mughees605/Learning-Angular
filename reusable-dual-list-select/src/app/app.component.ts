import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   mainArr:Array<any> = [ { text:"list"}, { text:"text"} , {text: 'commit'} ];

}

