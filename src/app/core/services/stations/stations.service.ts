import { Injectable } from '@angular/core';
import { IStation } from '../../models/station.model';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  allStations: IStation[] = [
    {
      id: '435a',
      name: 'Station Name1',
      totalSales: '62,721m³',
      totalValue: 255,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionPerHour: 20,
      maxTransactionDateTime: '8-1-2021 10:16 PM',
    },
    {
      id: '64s2',
      name: 'Station Name2',
      totalSales: '62,721m³',
      totalValue: 140,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionPerHour: 20,
      maxTransactionDateTime: '8-1-2021 10:16 PM',
    },
    {
      id: '2351',
      name: 'Station Name3',
      totalSales: '62,721m³',
      totalValue: 190,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionPerHour: 20,
      maxTransactionDateTime: '8-1-2021 10:16 PM',
    },
    {
      id: 'a234',
      name: 'Station Name4',
      totalSales: '62,721m³',
      totalValue: 230,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionPerHour: 20,
      maxTransactionDateTime: '8-1-2021 10:16 PM',
    },
    {
      id: 'fa33',
      name: 'Station Name5',
      totalSales: '62,721m³',
      totalValue: 140,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionPerHour: 20,
      maxTransactionDateTime: '8-1-2021 10:16 PM',
    },
  ];
}
