import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = this.url('/users/register');
    console.log(url)
    return this.http.post(url, user, { headers })
      .map(res => res.json())
  }

  url(ep) {
    return 'http://localhost:3000' + ep
  }

}
