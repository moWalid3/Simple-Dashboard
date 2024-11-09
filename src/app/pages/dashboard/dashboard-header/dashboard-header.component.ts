import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

type AvailablePeriod = 'Today' | 'Yesterday' | 'Last week'

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CalendarModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeaderComponent {
  targetPeriod = signal<AvailablePeriod>('Today');
}
