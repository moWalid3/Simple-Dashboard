import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IStation, StationPropertyKey } from '../../../../core/models/station.model';
import { ViewPropertiesComponent } from "../../../../components/view-properties/view-properties.component";

@Component({
  selector: 'app-stations-list',
  standalone: true,
  imports: [DatePipe, ViewPropertiesComponent],
  templateUrl: './stations-list.component.html',
  styleUrl: './stations-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StationsListComponent {
  station = input.required<IStation>();

  finalChosenProperties = signal<StationPropertyKey[]>([]);
}
