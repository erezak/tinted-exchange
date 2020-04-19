import { Injectable } from '@angular/core';
import { Deal } from '../shared/deal';
import { DEALS } from '../shared/deals';
import { Observable, of } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { randomDelay } from '../shared/randomDelay';


@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient,
    private processHttpMsgService: ProcessHTTPMsgService) { }

  getAll(): Observable<Deal[]> {
    return of(DEALS).pipe(delay(randomDelay()));
  }

  get(id: string): Observable<Deal> {
    return of(DEALS.filter((deal) =>
               (deal.id === id))[0]).pipe(delay(randomDelay()));
  }

  getFeatured(): Observable<Deal> {
    return of(DEALS.filter((deal) =>
                (deal.featured))[0]).pipe(delay(randomDelay()));
  }
}
