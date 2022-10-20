import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product: any;
  discount: any;
  totalProductPrice: any;
  totalAfterDiscount: any = 0;
  calcTotal: any;

  constructor(private userData: ServiceService, private router: Router) {
    this.product = this.userData.data;
    this.totalProductPrice = this.totalPrice();
    this.totalAmount();
    console.log(this.userData.data, 'userData');
  }

  simpleAlert() {
    Swal.fire('Hello Angular');
  }

  confirmBox(arr: any) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.deleteItem(arr);
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

  totalAmount() {
    if (this.totalProductPrice == 0) {
      this.discount = 0;
      this.totalAfterDiscount = 0;
    } else {
      this.discount = 99;
      this.totalAfterDiscount = this.totalProductPrice - 99;
    }
  }

  cartPage(){
    this.router.navigateByUrl('/checkout');
    console.log("cartpage")
  }

  totalPrice() {
    this.calcTotal = this.product.reduce((totalCost: any, product: any) => {
      return totalCost + product.price;
    }, 0);
    return this.calcTotal;
  }



  deleteItem(arr: any) {
    this.product = this.product.filter((item: any) => item.id !== arr.id);
    this.userData.data = this.product;
    this.totalProductPrice = this.totalPrice();
    this.totalAmount();
    console.log(this.userData.data, 'userData');
  }

  ngOnInit(): void {}
}
