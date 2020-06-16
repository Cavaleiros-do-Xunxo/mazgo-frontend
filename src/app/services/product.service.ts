import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API_URL = "https://mazgo.notfab.net";

  constructor(private httpClient: HttpClient) { }

  async getProducts(): Promise<any> {
    try {
      const data = await this.httpClient.get(this.REST_API_URL + "/products").toPromise();
      return data;
    } catch (err) {
      console.error(`Error fetching data from API: ${err}`);
      return [];
    }
  }
}
