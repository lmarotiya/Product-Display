import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = {
    "id": "",
    "name": "",
    "description": "",
    "price": "",
    "available": ""
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      available: true
    };

    this.productService.create(data)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.submitted = true;
        },
        (        error: any) => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      "id": "",
      "name": "",
      "description": "",
      "price": "",
      "available": ""
    };
  }

}