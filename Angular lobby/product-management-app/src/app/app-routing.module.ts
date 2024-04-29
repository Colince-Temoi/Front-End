import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'product-add',component: AddProductComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
