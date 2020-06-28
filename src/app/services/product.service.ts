import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {map} from "rxjs/operators";

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

}
