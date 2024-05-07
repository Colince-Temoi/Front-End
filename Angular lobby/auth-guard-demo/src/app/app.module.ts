import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* The components which I created  by default they will be declared here in the app.modules.ts file
- Remove them as will be doing some industry standard stuff i.e., a feature should be a module.
- The navbar component only is what I am retaining here.
*/

// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
// import { ProductComponent } from './product/product.component';
// import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormDemoComponent } from './template-driven-form-demo/template-driven-form-demo.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemplateDrivenFormDemoComponent,
    UserComponent
    // HomeComponent,
    // ContactComponent,
    // ProductComponent,
    // LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
