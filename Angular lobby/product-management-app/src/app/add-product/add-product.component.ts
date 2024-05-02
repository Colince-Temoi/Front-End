import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[ProductsDataService]
})
export class AddProductComponent {

  product: Product = {
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
  };

  constructor(private productsService: ProductsDataService) { }

  addProduct(): void {
    this.productsService.addProduct(this.product);
    console.log(this.product);
    this.product = {  // Clear the form after adding the product
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
    };
  }
}
