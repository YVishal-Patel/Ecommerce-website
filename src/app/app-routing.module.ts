import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { ToysComponent } from './pages/toys/toys.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { DressesComponent } from './pages/dresses/dresses.component';
import { ViewpageComponent } from './pages/viewpage/viewpage.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clothing', component: ClothingComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'toys', component: ToysComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'dresses', component: DressesComponent },
  { path: 'viewpage:id', component: ViewpageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
