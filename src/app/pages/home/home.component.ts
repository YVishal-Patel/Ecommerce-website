import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsData: any;
  checkDescriptionData:any;


  constructor(private userData: ServiceService, private router:Router) {
    this.userData.getUserData().subscribe((data: any) => {
      console.log(data.products);
      this.productsData = data.products;
    });
  }

  // checkDescription(){
  //   if(this.productsData.description > 20){
  //     return this.productsData.description.slice(0,20)+" ..."
  //   }else{
  //     return this.productsData.description;
  //   }
  // }

  selectCategory(categoryname:any){
    console.log(categoryname);
    this.router.navigate(['viewpage:id'],{queryParams:{category:categoryname}})
  }
  ngOnInit(): void {
    // this.checkDescriptionData = this.checkDescription();
  }
}
