import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  products:Product[]=[];
  product:Product={
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  }

  addProduct() {
    this.products=JSON.parse(localStorage.getItem("products")??'{}');

    this.products.push(this.product);
    
    localStorage.setItem("products",JSON.stringify(this.products));
    console.log(this.product);
    
    }
}
