import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: any;
  arr:any = [];
  cartData:any = [];
  wishlistData:any = [];

  constructor(private http: HttpClient) {}

  getUserData() {
    this.url = 'https://dummyjson.com/products';
    return this.http.get(this.url)
  }

  singleUserData(value: any) {
    this.url = `https://dummyjson.com/products/${value}`;
    return this.http.get(this.url);
  }
}
