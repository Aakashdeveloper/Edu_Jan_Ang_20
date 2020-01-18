import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forms',
    templateUrl: './profile.component.html'
})


export class ProfileComponent implements OnInit {

    userinfo;
    token;

    constructor(private profileService: ProfileService,
                private router: Router) {}

    ngOnInit() {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.profileService.getUserInfo(this.token)
            .subscribe((res) => this.userinfo = res);
    }

    logout(): void {
        localStorage.removeItem('TOKEN_NUMBER');
        localStorage.removeItem('ROLE_TYPE');
        this.router.navigate(['/login']);
    }

}
