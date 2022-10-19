import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: any;
  discount: any;
  totalProductPrice: any = 0;
  totalAfterDiscount: any;
  // clicked = true;

  constructor(private userData: ServiceService, private router: Router) {
    this.product = this.userData.arr;
    this.totalAmount();
    

  }

  totalAmount() {
    for (let i = 0; i < this.product.length; i++) {
      this.totalProductPrice += this.product[i].price;
    }

    if (this.totalProductPrice == 0) {
      this.discount = 0;
      this.totalAfterDiscount = 0;
    } else {
      this.discount = 99;
      this.totalAfterDiscount = this.totalProductPrice - 99;
    }
  }

  deleteItem(arr: any) {
    this.product = this.product.filter((item: any) => item.id !== arr.id);
    this.userData.arr = this.product
  }


  ngOnInit(): void {
    console.log(this.userData.arr,"arr")
  }
}
