import { Injectable } from '@angular/core';
import {Product} from './products'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
private fournisseurId : string = "401000236";
products : Product[]=[];

  constructor(private http: HttpClient) {}

  getProducts(){
      return this.http.get<Product[]>(this.productsUrl + this.fournisseurId);
  }
}


