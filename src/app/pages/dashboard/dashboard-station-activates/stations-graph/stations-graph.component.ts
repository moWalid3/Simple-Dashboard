import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { IStation } from '../../../../core/models/station.model';

@Component({
  selector: 'app-stations-graph',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './stations-graph.component.html',
  styleUrl: './stations-graph.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'surface-section border-round-2xl p-4'
  }
})
export class StationsGraphComponent implements OnInit {
  stations = input.required<IStation[]>();
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: this.stations().map(station => station.name),
      datasets: [
        {
          label: 'Stations',
          backgroundColor: documentStyle.getPropertyValue('--primary-color'),
          borderColor: documentStyle.getPropertyValue('--primary-color'),
          data: this.stations().map(station => station.totalValue),
          barThickness: 20,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },

        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },

      height: 200
    };
  }
}
