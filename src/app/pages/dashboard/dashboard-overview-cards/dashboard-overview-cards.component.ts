import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OverviewStatesService } from '../../../core/services/overviewStates/overview-states.service';

@Component({
  selector: 'app-dashboard-overview-cards',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-overview-cards.component.html',
  styleUrl: './dashboard-overview-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grid mb-5',
  },
})
export class DashboardOverviewCardsComponent {
  overviewStatesService = inject(OverviewStatesService);
}
