import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormsComponent } from './regsiter-form/registerforms.component';
import { LoginFormComponent } from './login-form/loginforms.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RoleGaurdService } from './role-gaurd.service';
import { ProfileGaurdService } from './profile-gaurd.service';


const routes: Routes = [
  {path: 'register', component: RegisterFormsComponent },
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', canActivate: [ProfileGaurdService],  component: ProfileComponent},
  {path: 'users', canActivate: [RoleGaurdService], component: UserlistComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RoleGaurdService, ProfileGaurdService]
})
export class AppRoutingModule { }
