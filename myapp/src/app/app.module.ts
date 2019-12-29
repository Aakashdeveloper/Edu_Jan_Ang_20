import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';


@NgModule({

    // all modules will declare her
   imports: [
        BrowserModule
   ],

   // All Component, directive, Pipe
   declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
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
