import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (next.url[0].path == 'login') {
            if (window.localStorage.getItem('isLogged')) {
                console.log('You are already logged in');
                return false;
            }
            else {
                return true;
            }
        }

        if (window.localStorage.getItem('isLogged')) {
            return true;
        }

        console.log('You must be logged in');
        this.router.navigate(['/login']);
        return false;
    }

}
