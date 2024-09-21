import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable()
export class AuthActivateRouteGuard implements CanActivate {
    user = new User();
    
    constructor(private router: Router){

    }
    /**
     * Here I am just doing a simple check .
     * I am trying to get the user details from the sesseion storage.
     * If some data  not present, I am redirecting to the login component.
     * Finally, I am returning true or false if the user is logged in or not respectively.
     * Important!! This means, whenever the user is logged in, the user details will be present inside the session storage. If you check my login component .ts file as soon as I am getting a response I am setting UserDetails object inside session storage. This indicates that ONLY! post authentication is when I am going to store the user details inside the session storage.
     */
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(sessionStorage.getItem('userdetails')){
            this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
        }
        if(!this.user){
            this.router.navigate(['login']);
        }
        return this.user?true:false;
    }

}