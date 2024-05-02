import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor() { }

  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem("products") || '[]');
  }

  addProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }

  deleteProductById(id: number): void {
    if (confirm('Are you sure to delete this product?!')) {
      const products = this.getProducts();
      const index = products.findIndex(product => product.id === id);
      if (index > -1) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
      }
    }
  }
}
