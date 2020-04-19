import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Deal } from '../shared/deal';
import { DealService } from '../services/deal.service';
import { Seller } from '../shared/seller';
import { SellerService } from '../services/seller.service';
import { flyInOut, expand } from '../animations/app.animation';
import { Showcased } from '../shared/showcased';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  product: Product;
  productErrMessage: string;
  promotion: Deal;
  promotionErrMessage: string;
  seller: Seller;
  sellerErrMessage: string;
  prev: number;
  next: number;
  showcase: Showcased[];

  constructor(private productservice: ProductService,
    private sellerService: SellerService,
    private promotionservice: DealService,
    @Inject('BaseURL') private  BaseURL) { 
      this.showcase = [];
    }

  ngOnInit() {
    this.productservice.getFeatured().
      subscribe((product) => {
        this.product = product;
        this.showcase.push(product);
      },
        errMessage => this.productErrMessage = errMessage);
    this.promotionservice.getFeatured().
      subscribe((promotion) => {
        this.promotion = promotion;
        this.showcase.push(promotion);
      },
      errMessage => this.promotionErrMessage = errMessage);
    this.sellerService.getFeatured().
      subscribe((seller) => {
        this.seller = seller;
        this.showcase.push(seller);
      },
      errMessage => this.sellerErrMessage = errMessage);
  }

}
