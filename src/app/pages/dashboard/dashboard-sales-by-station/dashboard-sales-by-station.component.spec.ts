import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalesByStationComponent } from './dashboard-sales-by-station.component';

describe('DashboardSalesByStationComponent', () => {
  let component: DashboardSalesByStationComponent;
  let fixture: ComponentFixture<DashboardSalesByStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSalesByStationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSalesByStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
