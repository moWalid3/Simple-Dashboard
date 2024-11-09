import { ChangeDetectionStrategy, Component, OnInit, output, signal } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { IStationProperty, StationPropertyKey } from '../../core/models/station.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-properties',
  standalone: true,
  imports: [
    InputSwitchModule,
    OverlayPanelModule,
    ButtonModule,
    DropdownModule,
    CheckboxModule,
    FormsModule,
  ],
  templateUrl: './view-properties.component.html',
  styleUrl: './view-properties.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPropertiesComponent implements OnInit {
  properties: IStationProperty[] = [
    { name: 'Total sales', key: 'TotalSales' },
    { name: 'Total transaction', key: 'TotalTransaction' },
    { name: 'Total value', key: 'TotalValue' },
    { name: 'Max transaction count per hour', key: 'MaxTransactionPerHour' },
    { name: 'Max transaction count date-time', key: 'MaxTransactionDateTime' },
    { name: 'Compressor status', key: 'CompressionState' },
  ];

  chosenProperties = signal<StationPropertyKey[]>([
    'TotalSales',
    'TotalTransaction',
    'TotalValue',
    'MaxTransactionPerHour',
    'MaxTransactionDateTime',
    'CompressionState',
  ]);

  onChangeViewProperties = output<StationPropertyKey[]>();

  ngOnInit(): void {
    this.onHandlePropertyChange();
  }

  onHandlePropertyChange() {
    this.onChangeViewProperties.emit(this.chosenProperties());
  }
}
