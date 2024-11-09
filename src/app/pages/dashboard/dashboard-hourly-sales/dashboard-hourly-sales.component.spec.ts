import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHourlySalesComponent } from './dashboard-hourly-sales.component';

describe('DashboardHourlySalesComponent', () => {
  let component: DashboardHourlySalesComponent;
  let fixture: ComponentFixture<DashboardHourlySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHourlySalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHourlySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
