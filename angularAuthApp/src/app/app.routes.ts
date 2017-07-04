import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.service';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EmailComponentComponent } from './email-component/email-component.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'

export const router: Routes =[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent, canActivate:[AuthGuard]},
    {path:'signup', component:SignupComponent},
    {path:'login-email', component:EmailComponentComponent, canActivate:[AuthGuard]},
    {path:'members', component:MembersComponent , canActivate:[AuthGuard]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);