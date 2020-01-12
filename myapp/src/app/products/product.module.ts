import { NgModule} from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './products-details.component';
import { MyUpperCasePipe } from './myupper.pipe';
import { MyDiscountPipe } from './discount.pipe';
import { MySearchPipe}  from './search.pipe';
import { ProductService}  from './produtc.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ChangeColorDirective } from './colorDirective.directive';

@NgModule({
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    declarations:[
        ProductComponent,
        MyUpperCasePipe,
        MyDiscountPipe,
        MySearchPipe,
        ProductDetailsComponent,
        ChangeColorDirective
     ],
    providers:[
        ProductService
    ]
})

export class ProductModule {

}