import { TestBed } from '@angular/core/testing';

import { SalesByStationService } from './sales-by-station.service';

describe('SalesByStationService', () => {
  let service: SalesByStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesByStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
