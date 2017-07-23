import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
const appRoutes: Routes =
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'register', component: RegisterComponent,
    },
    { path: 'login', component: LoginComponent }

  ]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}