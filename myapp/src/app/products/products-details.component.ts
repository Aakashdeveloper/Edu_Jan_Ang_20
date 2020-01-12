import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService} from './produtc.service';
import { IProduct } from './product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './products-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  
  id: number;
  details: IProduct[];

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductDetails(this.id)
        .subscribe((data) => this.details = data)
    
  }

  onBack():void {
    this.router.navigate(['/product'])
  }

}


/*
name: string;
  image: string;
  description: string
this.route.queryParams
        .subscribe((data) => {
          this.name = data['name']
          this.image = data['img']
          this.description = data['details']
        })
  */