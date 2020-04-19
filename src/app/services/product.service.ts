import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError, delay } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { randomDelay } from '../shared/randomDelay';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              private processHttpMsgService: ProcessHTTPMsgService) { }

  getAll(): Observable<Product[]> {
    return of(PRODUCTS).pipe(delay(randomDelay()));
  }

  get(id: string): Observable<Product> {
    return of(PRODUCTS.filter((product) =>
               (product.id === id))[0]).pipe(delay(randomDelay()));
  }

  getFeatured(): Observable<Product> {
    return of(PRODUCTS.filter((product) =>
                (product.featured))[0]).pipe(delay(randomDelay()));
  }

  getAllIds(): Observable<string [] | any> {
    return  this.getAll()
                .pipe(map(products =>
                      products.map(product => product.id)))
                      .pipe(error => error);
  }

  update(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<Product>(baseURL + 'products/' + product.id, 
                    product, httpOptions)
                    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
