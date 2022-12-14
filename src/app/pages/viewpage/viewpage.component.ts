import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css'],
})
export class ViewpageComponent implements OnInit {
  id: any;
  singleData: any;
  clicked = true;
  click = true;

  constructor(
    private userData: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.category;
    });
    this.userData.singleUserData(this.id).subscribe((data: any) => {
      this.singleData = data;
    });
  }

  cartPage() {
    this.router.navigateByUrl('cart');
  }

  AddToCart() {
    this.userData.arr.push(this.singleData);
    this.clicked = false;
    this.userData.userData();
    console.log(this.userData.arr, 'arr');
    console.log(this.userData.data, 'userData val');
  }

  wishlistData() {
    this.userData.wishlistData.push(this.singleData);
    this.click = false;
  }

  wishlistPage() {
    this.router.navigateByUrl('/wishlist');
  }
}
