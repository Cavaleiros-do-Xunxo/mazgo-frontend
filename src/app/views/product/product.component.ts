import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {ProductHistory} from "../../models/ProductHistory";
import * as moment from 'moment';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    product: Product;
    history: ProductHistory[];

    constructor(private route: ActivatedRoute, private service: ProductService) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.getById(id).subscribe(product => {
            this.product = product;
        });
        this.service.getHistory(id).subscribe(history => {
            this.history = history;
        });
    }

    toTime(timestamp: string) {
        return moment(parseInt(timestamp)).local().format('DD/MM/YYYY HH:mm');
    }

    public getStockStatus(quantity: number): string {
        if (quantity > 0) {
            return "In stock";
        } else {
            return "Out of stock";
        }
    }

    public getStockStatusClass(quantity: number): string {
        if (quantity >= 10) {
            return "success";
        } else if (quantity > 0 && quantity < 10) {
            return "warning";
        } else {
            return "danger";
        }
    }

}
