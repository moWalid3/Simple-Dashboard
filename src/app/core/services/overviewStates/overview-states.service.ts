import { Injectable } from '@angular/core';
import { IOverviewStates } from '../../models/overviewStates.model';

@Injectable({
  providedIn: 'root',
})
export class OverviewStatesService {
  states: IOverviewStates[] = [
    {
      id: '1f32',
      state: 'Total Value',
      stateUnit: 'EGP',
      stateValue: '71,028',
      statusIcon: 'pi pi-caret-down',
      statusColor: 'text-primary',
      statusValue: '2%',
    },
    {
      id: '2f32',
      state: 'Total Sales',
      stateUnit: 'm³',
      stateValue: '20,000',
      statusIcon: 'pi pi-caret-up',
      statusColor: 'text-cyan-500',
      statusValue: '50 m³',
    },
    {
      id: '3f32',
      state: 'Avg Sales',
      stateUnit: 'm³',
      stateValue: '20,000',
      statusIcon: 'pi pi-caret-down',
      statusColor: 'text-primary',
      statusValue: '50 m³',
    },
    {
      id: '4f32',
      state: 'Total Transaction Count',
      stateValue: '1567',
      statusIcon: 'pi pi-caret-up',
      statusColor: 'text-cyan-500',
      statusValue: '20%',
    },
  ];
}
