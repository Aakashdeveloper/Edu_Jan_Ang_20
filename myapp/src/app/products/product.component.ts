import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './produtc.service';


@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    /*styles: [
       ` .secondheading{text-align:center; color:olive}`
    ],*/
    styleUrls: ['./product.component.css']

})

export class ProductComponent implements OnInit {
    title: string = 'Product App';
    desc: string = 'This is about products';
    imageWidth: number =  80;
    showTable: boolean = true;
    showImage: boolean = true;
    userText:string = '';

    constructor(private productService: ProductService) {

    }
    product: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    dataRecive(message: string) {
      this.title = 'Product Pages>>>>>>' + message;
    }

    ngOnInit() {
      this.productService.getProducts()
      .subscribe((data) => this.product = data);
    }
}
