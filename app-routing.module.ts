import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Pre } from './pre';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';


const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent }, // localhost:4200
  { path: 'aboutus', component: AboutusComponent }, // localhost:4200/aboutus
  {path: 'contactus', component: ContactusComponent},
 {path:'products',canActivate:[AuthGuard], loadChildren:"./products/product.module#ProductModule",data: { preload: true, delay: true },},
 {path:'order',loadChildren:"./order/order.module#OrderModule",data: { preload: false, delay: true }},
 {path:'customer',loadChildren:"./customer/customer.module#CustomerModule",data: { preload: false, delay: true },},
 {path:'prat',loadChildren:"./pr/pr.module#PrModule"},
  {path:'**',component:PagenotfoundComponent} // localhost:4200/contactus
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:Pre})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
