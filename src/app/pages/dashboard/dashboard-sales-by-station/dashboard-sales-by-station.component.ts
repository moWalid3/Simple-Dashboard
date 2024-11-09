import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { SalesByStationService } from '../../../core/services/salesByStation/sales-by-station.service';

@Component({
  selector: 'app-dashboard-sales-by-station',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './dashboard-sales-by-station.component.html',
  styleUrl: './dashboard-sales-by-station.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSalesByStationComponent {
  salesByStationService = inject(SalesByStationService);
}
