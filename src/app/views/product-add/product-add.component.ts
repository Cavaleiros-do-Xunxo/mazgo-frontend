import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

    name: string;
    identifier: string;
    quantity: number;
    image: string;

    loading = false;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
    }

    add() {
        this.loading = true;
        this.productService.addProduct(this.name, this.identifier, this.quantity, this.image).subscribe(() => {
            this.loading = false;
            location.href = '/';
        }, () => {
            this.loading = false;
        });
    }

}
