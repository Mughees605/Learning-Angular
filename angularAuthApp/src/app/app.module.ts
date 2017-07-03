import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'




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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
