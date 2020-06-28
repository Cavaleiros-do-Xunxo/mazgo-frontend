import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ProductHistory} from "../models/ProductHistory";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    constructor(private httpClient: HttpClient) {
    }

    getHistory(): Observable<ProductHistory[]> {
        return this.httpClient.get<any>(environment.api + "/history")
            .pipe(map(x => x.items));
    }

}
