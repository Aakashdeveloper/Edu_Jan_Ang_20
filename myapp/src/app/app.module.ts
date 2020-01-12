import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { HomepipePipe } from './home/homepipe.pipe';
import { OrderServiceService } from './orders/order-service.service';
import { ProductModule } from './products/product.module';

@NgModule({
    // all modules will declare her
   imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
   ],
   // All Component, directive, Pipe
   declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    HomepipePipe
   ],
   // Only and Only Main Component
   bootstrap: [
    AppComponent
   ],
   // All Services
   providers: [
     OrderServiceService
   ]

})

export class AppModule {

}
