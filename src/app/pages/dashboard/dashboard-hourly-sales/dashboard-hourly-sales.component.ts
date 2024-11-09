import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { HourlySalesService } from '../../../core/services/hourlySales/hourly-sales.service';

@Component({
  selector: 'app-dashboard-hourly-sales',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard-hourly-sales.component.html',
  styleUrl: './dashboard-hourly-sales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHourlySalesComponent implements OnInit {
  private hourlySalesService = inject(HourlySalesService);
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );

    this.data = {
      labels: [
        '24:00',
        '02:00',
        '04:00',
        '06:00',
        '08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00',
      ],
      datasets: [
        {
          label: this.hourlySalesService.sales[0].sale,
          borderColor: documentStyle.getPropertyValue('--cyan-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--cyan-400'),
          pointBorderColor: documentStyle.getPropertyValue('--cyan-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--cyan-400'),
          data: this.hourlySalesService.sales[0].values,
        },
        {
          label: this.hourlySalesService.sales[1].sale,
          borderColor: documentStyle.getPropertyValue('--primary-color'),
          pointBackgroundColor: documentStyle.getPropertyValue('--primary-color'),
          pointBorderColor: documentStyle.getPropertyValue('--primary-color'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--primary-color'),
          data: this.hourlySalesService.sales[1].values,
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
