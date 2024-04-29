import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MultiTabComponent } from './multi-tab/multi-tab.component';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { TablesCardsComponent } from './tables-cards/tables-cards.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { MyStructuralDirectiveDirective } from './my-structural-directive.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesLobbyComponent } from './pipes-lobby/pipes-lobby.component';
import { GenderSalutationPipe } from './gender-salutation.pipe';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactUsComponent,
    MultiTabComponent,
    MultiFormComponent,
    TablesCardsComponent,
    MyCustomDirectiveDirective,
    MyStructuralDirectiveDirective,
    EmployeeListComponent,
    EmployeeCountComponent,
    ParentComponent,
    ChildComponent,
    PipesLobbyComponent,
    GenderSalutationPipe,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
