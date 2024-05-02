import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  /* These components configured here, are going to be loaded where the RouterOutlet directive is configured.
  I.e., where you see something like <router-outlet></router-outlet>
  */
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    ProductListComponent,
    AddProductComponent,
    ErrorPageComponent,
    ProductEditComponent,
    ProductDetailsComponent,
  ],
  /* Like this we are importing modules which we are going to use in our App module here
  - If you want to use HttpClient module and other predefine or user defined modules in your AppModule, then import them here.
  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
