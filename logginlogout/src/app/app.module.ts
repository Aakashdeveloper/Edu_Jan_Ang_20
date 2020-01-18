import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormsComponent } from './regsiter-form/registerforms.component';
import { LoginFormComponent } from './login-form/loginforms.component';
import { RegisterService } from './regsiter-form/registerformPoster.service';
import { LoginService } from './login-form/loogin.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { UserlistComponent } from './userlist/userlist.component';
import { UserService } from './userlist/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormsComponent,
    LoginFormComponent,
    ProfileComponent,
    UserlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService,
    ProfileService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
