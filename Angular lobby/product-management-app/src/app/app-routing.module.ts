/* This file is nothing but a module on its own!
 Just like AppModule, this file is a predefine module by Angular.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuardGuard } from './auth-guard.guard';

/* Define your application routes here! */
const routes: Routes = [
  // blank means default path
  {path:'',component:ProductListComponent},
  {path:'product-list',component:ProductListComponent,
  /* If you want to display it as a child tp Product list component
  - Also remmber to add the router outlet directive in the parent where you need this child component to display.
  */
    // children:[
    //   {path:'product-details/:id',component: ProductDetailsComponent
    //   },
    //   {path:'product-edit/:id',component: ProductEditComponent

    //   },
    // ]
  },
  {path:'product-add',component: AddProductComponent, canActivate:[authGuardGuard]},
  {path:'product-edit/:id',component: ProductEditComponent},

  /* If you wan't to display this in the main component, then just do like this as we have been doing the rest
  - No need for a routerlink configurations for this as we have an clickable eye icon.
  */
  {path:'product-details/:id',component: ProductDetailsComponent},
  // ** means if no route path is matched, load sth for instance ErrorPageComponent
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  // If you hover over forRoot, you will know its purpose
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
