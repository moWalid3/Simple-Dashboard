import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalesByStationService {
  stationsSales = [
    { id: '23fs', station: 'Station 1', value: '62,721m³', progress: 40 },
    { id: '3f2s', station: 'Station 2', value: '81,634m³', progress: 60 },
    { id: '442s', station: 'Station 2', value: 'NM', progress: 80 },
  ];
}
