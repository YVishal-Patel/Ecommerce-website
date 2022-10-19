import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  product: any;

  constructor(private userData: ServiceService) {
    this.product = this.userData.wishlistData;
  }

  ngOnInit(): void {
    console.log(this.product, 'product');
    this.removeDuplicates()
  }

  removeWishlist(arr: any) {
    console.log(arr.id, 'id');
    this.product = this.product.filter((item: any) => item.id !== arr.id);
    this.userData.wishlistData = this.product;
  }

  AddToCart(arr:any){
    console.log(arr.id, 'id');
    this.product = this.product.filter((item: any) => item.id !== arr.id);
    this.userData.wishlistData = this.product;
    this.userData.arr.push(arr);
    this.removeDuplicates()
  }
   removeDuplicates() {
    return this.userData.arr.filter((item:any,
        index:any) => this.userData.arr.indexOf(item) === index);
}
}
