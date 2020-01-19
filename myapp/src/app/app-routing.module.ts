import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product.component';
import { ProductDetailsComponent } from './products/products-details.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterGaurds } from './products/product.gaurd';

const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'product/:id', canActivate: [RouterGaurds] , component: ProductDetailsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrdersComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: HomeComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [
        RouterGaurds
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}