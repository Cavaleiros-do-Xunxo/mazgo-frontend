import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    private REST_API_URL = "https://mazgo.notfab.net";

    constructor(private httpClient: HttpClient) { }

    async getHistorys(): Promise<any> {
        try {
            const data = await this.httpClient.get(this.REST_API_URL + "/history").toPromise();
            return data;
        } catch (err) {
            console.error(`Error fetching data from API: ${err}`);
            return [];
        }
    }
}
