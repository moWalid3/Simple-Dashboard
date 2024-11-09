import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HourlySalesService {
  sales = [
    {
      sale: 'Sale1',
      values: [80, 90, 40, 45, 60, 45, 45, 85, 60, 60, 90, 56]
    },
    {
      sale: 'Sale2',
      values: [45, 85, 60, 60, 90, 56, 100, 78, 48, 40, 30, 96]
    }
  ]
}
