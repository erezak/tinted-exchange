import { Injectable } from '@angular/core';
import { Seller } from '../shared/seller';
import { SELLERS } from '../shared/sellers';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { randomDelay } from '../shared/randomDelay';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient,
    private processHttpMsgService: ProcessHTTPMsgService) { }

  getAll(): Observable<Seller []> {
    return of(SELLERS).pipe(delay(randomDelay()));
  }

  get(id: string): Observable<Seller> {
    return of(SELLERS.filter((seller) =>
               (seller.id === id))[0]).pipe(delay(randomDelay()));
  }

  getFeatured(): Observable<Seller> {
    return of(SELLERS.filter((seller) =>
                (seller.featured))[0]).pipe(delay(randomDelay()));
  }

}
