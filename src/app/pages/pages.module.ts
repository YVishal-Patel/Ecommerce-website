import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SaleComponent } from './sale/sale.component';
import { ClothingComponent } from './clothing/clothing.component';
import { DressesComponent } from './dresses/dresses.component';
import { ToysComponent } from './toys/toys.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BeautyComponent } from './beauty/beauty.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TestimonialComponent,
    SaleComponent,
    ClothingComponent,
    DressesComponent,
    ToysComponent,
    ShoesComponent,
    AccessoriesComponent,
    BeautyComponent,
    ViewpageComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [CommonModule, IvyCarouselModule],
  exports: [
    HomeComponent,
    AboutComponent,
    TestimonialComponent,
    BeautyComponent,
    ToysComponent,
    SaleComponent,
    ClothingComponent,
    DressesComponent,
    ShoesComponent,
  ],
})
export class PagesModule {}
