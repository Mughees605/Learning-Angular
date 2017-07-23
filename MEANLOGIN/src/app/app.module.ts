import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//services
import { RegisterServiceService } from './register/register-service.service';
import { LoginServiceService} from './login/login-service.service'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RegisterServiceService,
    LoginServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
