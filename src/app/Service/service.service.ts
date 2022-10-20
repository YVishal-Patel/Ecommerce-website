import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url: any;
  arr: any = [];
  cartData: any = [];
  wishlistData: any = [];
  data: any = [];
  ids: any = [];
  val: any = [];

  constructor(private http: HttpClient) {}

  userData() {
    this.ids = this.arr?.map((item: any) => {
      return item.id;
    });
    this.data = this.arr.filter(
      (obj: { id: any }, index: any) => !this.ids.includes(obj.id, index + 1)
    );
  }

  getUserData() {
    this.url = 'https://dummyjson.com/products';
    return this.http.get(this.url);
  }

  singleUserData(value: any) {
    this.url = `https://dummyjson.com/products/${value}`;
    return this.http.get(this.url);
  }
}
