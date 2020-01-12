import { Component } from '@angular/core';
import {Iuser} from './forms.model';
import { NgForm} from '@angular/forms';
import { FormPosterService } from './formPoster.service';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})


export class FormsComponent {

    constructor(private formPosterService: FormPosterService) {}
    languages: any[] = ['Node', 'React', 'Angular', 'Golang', 'Python'];
    hasCodelangError: boolean = false;

    myUser = new Iuser('John', 'Eva', 'a@a.com', '12345', true, 'male', 'Node');

    firstToUpper(value: string): void {
        if (value.length > 0 ) {
            this.myUser.firstname = value.toUpperCase();
        } else {
            this.myUser.firstname = value;
        }
    }

    validateCodeLang(event): void {
        if (this.myUser.codelang === 'default') {
            this.hasCodelangError = true;
        } else {
            this.hasCodelangError = false;
        }
    }

    submitForm(form: NgForm): void {
        console.log('>>>>>>', form.value);
        this.formPosterService.employeeForm(form.value)
            .subscribe((res) => console.log('Data Posted'));
    }
}
