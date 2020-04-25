import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // @TODO: fetch data from API.
  getProducts(): Array<Product> {
    const apple = new Product('Apple', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvh_fUPArPDkJj9dWXPFV3iWrmVaL8mYhYdUQB3QCqRnA72a99&usqp=CAU');
    const potato = new Product('Potato', 0, 'https://www.veggieprezi.com/wp-content/uploads/2017/09/20170731_214129-555x688.jpg');
    const bread = new Product('Bread', 5, 'https://www.ambitiouskitchen.com/wp-content/uploads/2019/04/Multi-Grain-Seedy-Sandwich-Bread-Edited-5sq.jpg');

    return [apple, potato, bread];
  }
}
