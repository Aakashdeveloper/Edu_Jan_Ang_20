import { Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()

export class RoleGaurdService implements CanActivate {
    token: string;
    role: string;

    constructor(private router: Router) {}

    canActivate(router: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.role = localStorage.getItem('ROLE_TYPE');
        if (this.token === null ) {
            this.router.navigate(['/login']);
            return false;
        }
        if (this.token !== null && this.role !== 'admin') {
            this.router.navigate(['/profile']);
            return false;
        }
        if (this.token !== null && this.role === 'admin') {
            return true;
        }

    }

}
