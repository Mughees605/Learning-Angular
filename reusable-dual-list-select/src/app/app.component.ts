import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items:Array<any> = [ "list"  ,"text",  "commit", "country", "place", "cities", "streets", "lanes" ];

}

