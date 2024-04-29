import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:Product[]=[];

  ngOnInit(){ 
    this.getProducts();
  }

  getProducts() {
    this.products=JSON.parse(localStorage.getItem("products")||'[]');  
  }

  deleteProductById(id: number) {
  if (confirm('Are you sure to delete this product?!')) {
     if (this.products.findIndex((product)=>product.id==id)>-1) {
      this.products = this.products.filter((product)=>product.id!=id);

      // Updating local storage
      localStorage.removeItem("products");
      localStorage.setItem("products",JSON.stringify(this.products));
     }
  }
}
}
