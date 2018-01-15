import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstReusableComponent } from './first-reusable/first-reusable.component';
import { SecondReusableComponent } from './second-reusable/second-reusable.component';
import { MainComponent } from './main/main.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    FirstReusableComponent,
    SecondReusableComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
