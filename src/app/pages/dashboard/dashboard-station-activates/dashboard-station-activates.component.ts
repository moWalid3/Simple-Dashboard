import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StationsGraphComponent } from './stations-graph/stations-graph.component';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsService } from '../../../core/services/stations/stations.service';

type StateView = 'Graph' | 'List';

@Component({
  selector: 'app-dashboard-station-activates',
  standalone: true,
  imports: [StationsGraphComponent, StationsListComponent],
  templateUrl: './dashboard-station-activates.component.html',
  styleUrl: './dashboard-station-activates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardStationActivatesComponent {
  stationsService = inject(StationsService);
  currentView = signal<StateView>('Graph');
}
