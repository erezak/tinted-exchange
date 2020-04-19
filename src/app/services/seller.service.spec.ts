import { TestBed } from '@angular/core/testing';

import { SellerService as SellerService } from './seller.service';

describe('SellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerService = TestBed.get(SellerService);
    expect(service).toBeTruthy();
  });
});
