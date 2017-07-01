import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/Rx'


@Injectable()
export class ServerService{


 constructor(private http:Http){}
  
  storeServers(servers:any[]){
   const headers = new Headers({"Content-Type":"application/json"})
   return this.http.post('https://ng-http-452a4.firebaseio.com/data.json', servers, {headers:headers})
  }

  getServers(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(
          (response:Response) => {
              const data = response.json();
              return data;
          }
      )
  }
}