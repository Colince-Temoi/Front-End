import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { MultiTabComponent } from './multi-tab/multi-tab.component';
import { TablesCardsComponent } from './tables-cards/tables-cards.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ParentComponent } from './parent/parent.component';
import { PipesLobbyComponent } from './pipes-lobby/pipes-lobby.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {path:'contact', component:ContactUsComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'news', component:ServicesComponent},
  {path:'wizard', component:MultiFormComponent},
  {path:'multi-tabs', component:MultiTabComponent},
  {path:'tables-cards', component:TablesCardsComponent},
  {path:'employee-list', component:EmployeeListComponent},
  {path:'parent', component:ParentComponent},

  {path:'pipes-lobby', component:PipesLobbyComponent},
  {path:'users', component:UserListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
