import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { MyUpperCasePipe } from './products/myupper.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { MySearchPipe } from './products/search.pipe';
import { StarComponent } from './shared/star.component';


@NgModule({

    // all modules will declare her
   imports: [
        BrowserModule,
        FormsModule
   ],

   // All Component, directive, Pipe
   declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperCasePipe,
    MyDiscountPipe,
    MySearchPipe,
    StarComponent
   ],

   // Only and Only Main Component
   bootstrap: [
    AppComponent
   ],

   // All Services
   providers: []

})

export class AppModule {

}
