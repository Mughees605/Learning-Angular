import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ServerService } from './server.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serverService: ServerService) { }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGet() { 
    this.serverService.getServers().subscribe(
      (res)=>{
        console.log(res.json())
      }
    )
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (res:Response) => { console.log(res) }
    )
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
