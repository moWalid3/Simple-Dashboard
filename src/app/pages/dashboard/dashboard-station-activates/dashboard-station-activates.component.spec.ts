import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStationActivatesComponent } from './dashboard-station-activates.component';

describe('DashboardStationActivatesComponent', () => {
  let component: DashboardStationActivatesComponent;
  let fixture: ComponentFixture<DashboardStationActivatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStationActivatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStationActivatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
