import { TestBed } from '@angular/core/testing';

import { HourlySalesService } from './hourly-sales.service';

describe('HourlySalesService', () => {
  let service: HourlySalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourlySalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
