export interface IStation {
  id: string;
  name: string;
  totalSales: string;
  totalValue: number;
  compressionState: string;
  totalTransactionCount: number;
  maxTransactionPerHour: number;
  maxTransactionDateTime: string;
}

export type StationPropertyKey =
  | 'TotalSales'
  | 'TotalTransaction'
  | 'TotalValue'
  | 'MaxTransactionPerHour'
  | 'MaxTransactionDateTime'
  | 'CompressionState';

export interface IStationProperty {
  name: string;
  key: StationPropertyKey;
}
