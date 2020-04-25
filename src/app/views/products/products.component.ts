import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  public stockStatus: FormControl = new FormControl('');
  public productName: FormControl = new FormControl('');
  public products: Product[];
  
  public STOCK_STATUS_ENUM = {
    IN_STOCK: 'IN_STOCK',
    OUT_OF_STOCK: 'OUT_OF_STOCK'
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.products = this.productService.getProducts();
  }

  public getStockStatus(quantityOfItems: number): string {
    if (quantityOfItems > 0) {
      return "In stock";
    } else {
      return "Out of stock";
    }
  }

  public getStockStatusClass(quantityOfItems: number): string {
    if (quantityOfItems >= 10) {
      return "success";
    } else if (quantityOfItems > 0 && quantityOfItems < 10) {
      return "warning"
    } else {
      return "danger";
    }
  }

}
