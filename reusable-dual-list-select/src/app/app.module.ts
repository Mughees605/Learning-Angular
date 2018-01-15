import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstReusableComponent } from './first-reusable/first-reusable.component';
import { SecondReusableComponent } from './second-reusable/second-reusable.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstReusableComponent,
    SecondReusableComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
