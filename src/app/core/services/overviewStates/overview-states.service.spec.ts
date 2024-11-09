import { TestBed } from '@angular/core/testing';

import { OverviewStatesService } from './overview-states.service';

describe('OverviewStatesService', () => {
  let service: OverviewStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
