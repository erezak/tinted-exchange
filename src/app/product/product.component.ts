import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ProductComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  errMessage: string;

  constructor(private productService: ProductService,
              @Inject('BaseURL') private  BaseURL) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe((products) => this.products = products,
            errMessage => this.errMessage = <any>errMessage);
  }


}
