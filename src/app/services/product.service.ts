import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {map} from "rxjs/operators";
import {ProductHistory} from "../models/ProductHistory";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private httpClient: HttpClient) {
    }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<any>(environment.api + "/products")
            .pipe(map(x => x.items));
    }

    getById(id: string): Observable<Product> {
        return this.httpClient.get<Product>(environment.api + "/products/" + id);
    }

    getHistory(id: string): Observable<ProductHistory[]> {
        return this.httpClient.get<any>(environment.api + "/products/" + id + "/history")
            .pipe(map(x => x.content));
    }

    addProduct(name: string, identifier: string, quantity: number, image: string): Observable<Product> {
        return this.httpClient.post<Product>(environment.api + '/products', {
            'name': name,
            'identifier': identifier,
            'quantity': quantity,
            'image': image
        });
    }

}
