import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ProductService} from 'src/app/services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [ProductService]
})
export class ProductsComponent implements OnInit {

    public productName: FormControl = new FormControl('', [Validators.min(1)]);
    public products: any = [];

    public statusCheckbox = {
        IN_STOCK: false,
        OUT_OF_STOCK: false,
    }

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    private hasSomethingChecked(): boolean {
        return this.statusCheckbox.OUT_OF_STOCK || this.statusCheckbox.IN_STOCK;
    }

    // Xunxeira because we are lazy to create this route properly on back-end
    public getProducts(): void {
        this.productService.getProducts().subscribe(items => {
            let _products = [];
            if (this.hasSomethingChecked() && this.productName.valid) {
                if (this.statusCheckbox.IN_STOCK) {
                    _products.push(...(items.filter(product => product.quantity > 0)));
                }
                if (this.statusCheckbox.OUT_OF_STOCK) {
                    _products.push(...(items.filter(product => product.quantity === 0)));
                }
                if (this.productName.valid && _products.length > 0) {
                    _products = _products.filter(product => product.name.indexOf(this.productName.value) >= 0);
                }
            } else {
                if (this.productName.valid) {
                    _products = items.filter(product => product.name.indexOf(this.productName.value) >= 0);
                } else {
                    _products = items;
                }
            }
            this.products = _products;
        }, (ex) => {
            console.log('Error fetching products: ', ex);
            this.products = [];
        });
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
            return "warning";
        } else {
            return "danger";
        }
    }

}
