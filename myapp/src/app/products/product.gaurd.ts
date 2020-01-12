import { Injectable} from '@angular/core';
import{ CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()

export class RouterGaurds implements CanActivate{
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot):boolean{
        const id = +route.url[1].path;
        if(isNaN(id) || id <1){
            alert('Invalid Id');
            this.router.navigate(['/product']);
            return false;
        }
        return true;
    }
}