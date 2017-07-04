import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EmailComponentComponent } from './email-component/email-component.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
export const router: Routes =[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'login-email', component:EmailComponentComponent},
    {path:'members', component:MembersComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);