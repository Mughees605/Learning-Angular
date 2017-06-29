import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { Subscription } from 'rxjs/subscription'


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  paramsSubcription: Subscription

  constructor(private serversService: ServersService, private router: ActivatedRoute, private navigateRoute:Router) { }

  ngOnInit() {
    let id = +this.router.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.paramsSubcription = this.router.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);

    })

  }
  onEdit(){
    this.navigateRoute.navigate(['/servers',this.server.id,'edit'])
  }

}
