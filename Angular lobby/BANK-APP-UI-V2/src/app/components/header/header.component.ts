import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

/** Changes inside this file as of 1/10/2025
 * I have imported the classes KeycloakService and KeycloakProfile from the keycloak-angular and keycloak-js packages/libraries respectively.
 * Next, we have a method with the name login() which is invoked when the end-user clicks on the login button. Inside this method, I am trying to invoke the login() method of the KeycloakService class.
 * With this, the library behind the scenes is going to redirect the end-user to the login page of the Keycloak server/service by populating all the required details in the url.
 * Similarly, we have a method with the name logout() which is invoked when the end-user clicks on the logout button. Inside this method, I am trying to invoke the logout() method of the KeycloakService class.
 * Once the end-user clicks on the logout, we are going to redirecct the end-user to the url localhost:4200/home. This, I am passing as an input parameter to the logout() method of the KeycloakService class.
 * Behind the scenes the Keycloak library is going to invalidate all the tokens and sessions and once this is completed it is going to redirect the end-user to the url localhost:4200/home.
 * This same url,localhost:4200/home, we need to configure inside the Keycloak server/service. Log into the Kenycloak console >> realm (Choose eazybankdev) >> clients >> eazypublicclient >> settings >> Valid post logout redirect URIs and add the url localhost:4200/home.
 * Apart from this login and logout functionality, inside this component class I have also overridden the ngOnInit() method from the Angular Library. This method is invoked when the component(the header page) is being initialized(being loaded inside the UI).We know that the header page/component is included in all the pages of the UI.
 * Whenever a UI page/component is being loaded/redirected this ngOnInit() method is going to be invoked and executed.
 *  Inside this method, I am trying to invoke the isLoggedIn() method of the KeycloakService class. This is going to give me a boolean value to confirm whether the User is logged in or not.
 *  If the boolean value is true, that means the user is logged in and if the boolean value is false, that means the user is not logged in.
 * If the end-user is already logged in, I am trying to load the end-user profile details from the keycloak server by invoking the loadUserProfile() method of the KeycloakService class. This is going to return me an object which is of type KeycloakProfile. The same I am trying to store in the variable userProfile.
 * Next I am trying to set 2 variables in the user object which are authStatus and name. user variable is of type User class. I am setting the authStatus to AUTH. This variable, I am going to use in all the other palaces to identify whether the authentication is completed or not. If you go to the header component html file, I am trying to use the same to display the buttons like Home,Login,Contact US, Notices, Dashboard and Logout.
 * The next logic that I have written here is, I am trying to load the name of the logged in user by invoking the firstName property of the userProfile object. If the firstName is not available, I am setting the name variable of User class to empty string. This name variable I can now use it throught the application to display the logged in user details.
 * At last I am trying to set this entire User object in the session storage with the key userdetails so that the same can be used in all the subsequent files of the Angular application.
 * And that is it about the changes inside the header component file and header.component.html file.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  user = new User();

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.user.authStatus = 'AUTH';
      this.user.name = this.userProfile.firstName || "";
      window.sessionStorage.setItem("userdetails",JSON.stringify(this.user));
      
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    let redirectURI: string = "http://localhost:4200/home";
    this.keycloak.logout(redirectURI);
  }

}
