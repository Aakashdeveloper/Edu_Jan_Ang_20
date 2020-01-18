import { Component } from '@angular/core';
import {ILogin} from './loginforms.model';
import { NgForm} from '@angular/forms';
import { LoginService } from './loogin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forms',
    templateUrl: './loginforms.component.html'
})


export class LoginFormComponent {

    constructor(private loginService: LoginService,
                private router: Router) {}

    myUser = new ILogin('a@a.com', '12345');

    submitForm(form: NgForm): void {
        console.log('>>>>>>', form.value);
        this.loginService.loginUser(form.value)
            .subscribe((res) => this.loginService.getUserInfo(res['token'])
            .subscribe((response) => this.userRole(response['role'])));
    }


    userRole(typeOfRole): void {
        localStorage.setItem('ROLE_TYPE', typeOfRole);
        this.router.navigate(['/profile']);
    }
}
