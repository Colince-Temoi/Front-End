import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AccountComponent } from './components/account/account.component';
import { BalanceComponent } from './components/balance/balance.component';
import { LoansComponent } from './components/loans/loans.component';
import { CardsComponent } from './components/cards/cards.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

/** Changes inside this file as of 1/9/2025
 * I have imported KeycloakAngularModule, KeycloakService from the keycloak-angular package/library.
 * Once these classes are imported, I have written a function with the name initializeKeycloak(keycloak: KeycloakService). To this function I am trying to provide an object of type KeycloakService as an input parameter.
 * So, using keycloak object reference I am trying to call/invoke the init() method of the KeycloakService class.
 * To this init method, I am trying to pass all the configurations related to the Keycloak server/service as an input parameter. The inout type is a json object of objects.
 * config.url - base url of Keycloak server/service
 * config.realm - realm name of Keycloak server/service
 * config.clientId - client id of Keycloak server/service
 * initOptions.redirectUri - url of the application to which the user should be redirected after the user is authenticated successfully. The same we need to configure inside keycloak server as well.
 *  - Inside keycloak server under the clients, open the client eazypublicclient, click the tab settings and under the label "Valid Redirect URIs", add the url of the application to which the user should be redirected after the user is authenticated successfully.
 *  - Initially, we had mentioned asterisk(*) as the value of the redirectUri which meant that any url is fine - We did this just to test the scenario with Postman. But usually inside the enterprise applications, we need mention the actual url. Right now since we have a proper UI application we can mention the specific url here.
 *  - Whatever you mention herre in the Keycloak admin console it has to match with whatever you mention here in your angular code.
 *  - If you don't want to mention a specific url in the keycloak admin console, you can also mention astasterisk(*) which means any url is fine and that should also work fine.
 * initOptions.pkceMethod - method to be used for PKCE. This method we configured inside keycloak server during the registration of the client with the name eazypublicclient. You can revisit our previous discussion on how we were doing this.
 *  Next, I have provided a configuration,loadUserProfileAtStartUp as false and with this, what I am telling to angular and keycloak is don't try to load the user profile details during the authentication itself. I want to load them lazily whenever I need them. That's what we are trying to tell here.
 * At last under the NgModule, if you try to scroll down towards the end, under the providers array, I am trying to use:
 *  - provide: APP_INITIALIZER, and to this APP_INITIALIZER I am trying to provide the the initializeKeycloak function as the useFactory input parameter.
 *  So, whenever my app is being initialized initializeKeycloak function will be invoked which we have just defined in this file under which we have all the configurations around the Keycloak server/service.
 *  Using all those configurations, the app is going to start and with that, the integration between KeyCloak and Angular will be complete.
 * After the useFactory parameter, I am also trying to provide the configuration multi as true and dependencies, deps, as an array with the elelement KeycloakService object.
 * With this, you should be clear about all the changes we have done inside this file.
 * The next change we are doing is inside the header.component.html file. Open it to find out what are the changes we are doing there.
 */
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8081/',
        realm: 'eazybankdev',
        clientId: 'eazypublicclient',
      },
      initOptions: {
        pkceMethod: 'S256',
        redirectUri: 'http://localhost:4200/dashboard',
      },loadUserProfileAtStartUp: false
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    NoticesComponent,
    AccountComponent,
    BalanceComponent,
    LoansComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    KeycloakAngularModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
