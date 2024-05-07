import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsDataService } from '../products-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[ProductsDataService]
})
/* The OnInit interface is from the @angular/core package and is commonly used in Angular to ensure that a component has a method called ngOnInit(). This method is called by Angular once the component has been initialized and all its inputs have been bound.

Implementing the OnInit interface in your component allows you to define the ngOnInit() method, which is a lifecycle hook that Angular calls after initializing the component. It's a good practice to put initialization logic, such as fetching initial data, in the ngOnInit() method.

Here's why you use implements OnInit:

Interface Contract: By implementing OnInit, your component agrees to fulfill the contract specified by the interface, which means it must provide an implementation for the ngOnInit() method.
Lifecycle Hook: Implementing OnInit allows you to define the ngOnInit() method in your component. This method is called by Angular once the component has been initialized.
Initialization Logic: You can place initialization logic, such as fetching initial data or setting up subscriptions, inside the ngOnInit() method to ensure it runs at the appropriate time during the component lifecycle.*/

export class ProductListComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductsDataService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  editProduct(productId: number) {
    this.router.navigate(
      ['/product-edit',productId]
      );
    }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  deleteProductById(id: number): void {
    this.productService.deleteProductById(id);
    this.getProducts(); // Refresh products after deletion
  }
}