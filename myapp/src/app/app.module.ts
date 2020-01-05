import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
import { MyUpperCasePipe } from './products/myupper.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { MySearchPipe } from './products/search.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/produtc.service';
import { OrdersComponent } from './orders/orders.component';
import { HomepipePipe } from './home/homepipe.pipe';
import { OrderServiceService } from './orders/order-service.service';
import { ProductDetailsComponent } from './products/products-details.component';

@NgModule({

    // all modules will declare her
   imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
             {path: 'home', component: HomeComponent},
             {path: 'products', component: ProductComponent},
             {path: 'product/:id', component: ProductDetailsComponent},
             {path: 'orders', component: OrdersComponent},
             {path: '', redirectTo: 'home', pathMatch: 'full'},
        ])
   ],

   // All Component, directive, Pipe
   declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperCasePipe,
    MyDiscountPipe,
    MySearchPipe,
    StarComponent,
    OrdersComponent,
    HomepipePipe,
    ProductDetailsComponent
   ],

   // Only and Only Main Component
   bootstrap: [
    AppComponent
   ],

   // All Services
   providers: [
     ProductService,
     OrderServiceService
   ]

})

export class AppModule {

}
