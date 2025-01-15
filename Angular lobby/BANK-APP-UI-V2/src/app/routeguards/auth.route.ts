import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { User } from '../model/user.model';
import { KeycloakProfile } from 'keycloak-js';

/** Changes inside this file as of 1/10/2025
 * Inside this class, I have extended the class from the Keycloak-Angular library with the name KeycloakAuthGuard.
 * Once we exetend this class, we need to override the isAccessAllowed() method. Based upon the logic we have written inside this function, the end-user is going to be allowed to access a secured page, otherwise the end-user is going to be redirected to the login page.
 * The logic inside this function is:
 *  - At the very starting, we have an if block verifying if the authentication is completed or not. The variable authenticated is available inside KeycloakAuthGuard class which is present inside the Keycloak-Angular library.
 *  This field is going to have a boolean value confirming whther the authentication is successful or not.
 *  - If this value is false, we are negating it to make it true. Then we are proceeding to invoke the login() method of the KeycloakService class. This is going to take care of redirecting the end-user to the login page of the Keycloak server/service.
 *  - Incase if the authentication is already completed then the else block is going to be executed. Inside this block, we are going to load the end-user profile details from the keycloak server by invoking the loadUserProfile() method of the KeycloakService class. This is going to return me an object which is of type KeycloakProfile. The same I am trying to store in the variable userProfile.
 *  We also have one more variable, user, which is of type User class.  To this class I am trying to set its variables with values i.e., authStatus with value AUTH, name with value of the firstName property of the userProfile object and email with value of the email property of the userProfile object.
 *  - At last, I am trying to set this entire User object in the session storage with the key userdetails so that the same can be used in all the subsequent files of the Angular application.
 *  - Towards the end I am trying to get the data with the key roles from the route snapshot and I am trying to check whether the roles are present in the requiredRoles array or not. If they are present, then I am allowing the user to access the route.
 *  This roles data, I have configured in the app-routing.module.ts file. If you keenly observe, after the canActivate AuthKeyClockGuard I am trying to provide extra data. For certain paths I have mentioned empty {
   
  }
  While for other paths I have mentioned {
    roles: ['USER','ADMIN']
  }
    required roles information like USER and ADMIN. Check the app-routing.module.ts file for what I am trying to talk about here.
 * Now, before we try to take a decision on whether an end-user should be redirected or not, I have written some logic around the roles. 
 * First I am trying to read the roles information from the route snapshot with the key as roles. This requiredRoles placeholder variable is an array which is going to hold the roles information required for a given path.
 * If the roles information is not present in the requiredRoles array, then I am allowing the user to access the route. If it is empty or if its length is 0, then I am also allowing the user to access the route. This indicates that a particular route does not require any roles to access it. For example, dashboard and loans pages do not require any role to access. These secured APIs do not require any roles to access. For such routes we are simply returning true. 
 * Otherwise we are trying to execute the logic: requiredRoles.some((role) => this.roles.includes(role));
 * Inside this logic, first we are trying to get the roles information, this.roles, that the end-user has inside the KeyCloak auth server. This variable is going to be populated by the KeyCloak library during the authentication.
 *  - Here I am trying to check whether each of the role present inside this requiredRoles array if it is present inside the roles array. Otherwise, we are going to return false and with that the end-user will not be able to access the path  
 * That's it for now about the changes I have made in this file. Everything should be clear now.
 * The next change that I have done is inside the dashboard.service.ts file. Check it out for what I have done.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthKeyClockGuard extends KeycloakAuthGuard {
  user = new User();
  public userProfile: KeycloakProfile | null = null;
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }else{
        this.userProfile = await this.keycloak.loadUserProfile();
        this.user.authStatus = 'AUTH';
        this.user.name = this.userProfile.firstName || "";
        this.user.email = this.userProfile.email || "";
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.user));
    }

    // Get the roles required from the route.
    const requiredRoles = route.data["roles"];

    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.some((role) => this.roles.includes(role));
  }
}