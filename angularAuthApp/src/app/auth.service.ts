import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private af: AngularFireAuth, private router: Router) { }

    canActivate(): Observable<boolean> {
        return Observable.from(this.af.authState)
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
                if (authenticated && (this.router.url == '/' || this.router.url == '/login')) {
                    this.router.navigate(['/members']);
                    return true;
                }
                if (authenticated) {
                    // logged in so return true
                    return true;
                }

                if (!authenticated && (this.router.url == '/' || this.router.url == '/login')) {
                    // this.router.navigate(['/login']);
                    return true;
                } else {
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login']);
                    return false;
                }
            })

    }

}