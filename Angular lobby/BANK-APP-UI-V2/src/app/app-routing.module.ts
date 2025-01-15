import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from '../app/components/account/account.component';
import { BalanceComponent } from '../app/components/balance/balance.component';
import { NoticesComponent } from './components/notices/notices.component';
import { LoansComponent } from './components/loans/loans.component';
import { CardsComponent } from './components/cards/cards.component';
import { AuthKeyClockGuard } from './routeguards/auth.route';
import { HomeComponent } from './components/home/home.component';

/** Changes inside this file as of 1/10/2025 
 * Inside this file, if you keenly observe, all my secured paths like /dashboard, /myAccount, /myBalance, /myLoans, /myCards. are going to be protected by the AuthKeyClockGuard class.
 * Open this AuthKeyClockGuard class to see what I have done + whatever changes I have made inside this AuthKeyClockGuard class.
 * For the path /dashboard, I am protecting it by the AuthKeyClockGuard class and I am also configuring the roles which are allowed to access this path. For this path, no role is required.
 * For the path /myAccount, I am protecting it by the AuthKeyClockGuard class and I am also configuring the roles which are allowed to access this path. For this path, only USER role is required.
 * For the path /myBalance, I am protecting it by the AuthKeyClockGuard class and I am also configuring the roles which are allowed to access this path. For this path, USER and ADMIN roles are required.
 * ... etc.
 * All these roles information, I have mentioned in sync with the roles configuartions that are present in the Spring Boot application. Of course, anyone can change these roles information since it is a public application/Js application. But it is worth noting that this is going to act as a first level security layer. Incase, if someone is trying to alter these roles and trying to access the page, the backend Resource server is going to catch them and prevent them from accessing the page because anyway, the backend application is going to look for these kind of roles information from the end-user access token. This will make the person who tried to do this shittu stuff look dumb haha!
 * This roles information is going to be used in the AuthKeyClockGuard class to check whether the end-user is allowed to access the page or not. You can see after the else block of the isAccessAllowed() method of the AuthKeyClockGuard class.
 */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'notices', component: NoticesComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthKeyClockGuard],data: {
    
  }},
  { path: 'myAccount', component: AccountComponent, canActivate: [AuthKeyClockGuard],data: {
    roles: ['USER']
  }},
  { path: 'myBalance', component: BalanceComponent, canActivate: [AuthKeyClockGuard],data: {
    roles: ['USER','ADMIN']
  }},
  { path: 'myLoans', component: LoansComponent, canActivate: [AuthKeyClockGuard],data: {
    
  }},
  { path: 'myCards', component: CardsComponent, canActivate: [AuthKeyClockGuard],data: {
    roles: ['USER']
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
