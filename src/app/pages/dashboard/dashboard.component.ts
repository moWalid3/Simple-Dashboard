import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardOverviewCardsComponent } from './dashboard-overview-cards/dashboard-overview-cards.component';
import { DashboardHourlySalesComponent } from './dashboard-hourly-sales/dashboard-hourly-sales.component';
import { DashboardSalesByStationComponent } from './dashboard-sales-by-station/dashboard-sales-by-station.component';
import { DashboardStationActivatesComponent } from './dashboard-station-activates/dashboard-station-activates.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardHeaderComponent,
    DashboardOverviewCardsComponent,
    DashboardHourlySalesComponent,
    DashboardSalesByStationComponent,
    DashboardStationActivatesComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {}
