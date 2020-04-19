import { Component, OnInit, Inject } from '@angular/core';
import { Seller } from '../shared/seller';
import { SellerService } from '../services/seller.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class SellersComponent implements OnInit {

  sellers: Seller[];
  errMessage: string;

  constructor(private sellerService: SellerService,
            @Inject('BaseURL') private  BaseURL)  { }

  ngOnInit() {
    this.sellerService.getAll()
      .subscribe((sellers) => this.sellers = sellers,
        errMessage => this.errMessage = errMessage);
  }

}
