import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { routes } from './app.routes';
import { AuthGuard } from './auth.service';


  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyAJUVixnpJEMoXuHzHfYNDTLk7-RDO0HY4",
    authDomain: "ng-http-452a4.firebaseapp.com",
    databaseURL: "https://ng-http-452a4.firebaseio.com",
    projectId: "ng-http-452a4",
    storageBucket: "ng-http-452a4.appspot.com",
    messagingSenderId: "32230195720"
  };

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EmailComponentComponent } from './email-component/email-component.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    EmailComponentComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
