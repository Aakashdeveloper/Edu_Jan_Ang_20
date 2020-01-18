import { Component } from '@angular/core';
import {IRegister} from './registerforms.model';
import { NgForm} from '@angular/forms';
import { RegisterService } from './registerformPoster.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forms',
    templateUrl: './registerforms.component.html'
})


export class RegisterFormsComponent {

    constructor(private registerService: RegisterService,
                private router: Router) {}


    myUser = new IRegister('John',  'a@a.com', '12345');

    firstToUpper(value: string): void {
        if (value.length > 0 ) {
            this.myUser.name = value.toUpperCase();
        } else {
            this.myUser.name = value;
        }
    }


    submitForm(form: NgForm): void {
        console.log('>>>>>>', form.value);
        this.registerService.RegisterUser(form.value)
        .subscribe((res) => this.router.navigate(['/login']));
    }
}
