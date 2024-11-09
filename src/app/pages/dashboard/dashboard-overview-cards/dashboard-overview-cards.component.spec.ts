import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverviewCardsComponent } from './dashboard-overview-cards.component';

describe('DashboardOverviewCardsComponent', () => {
  let component: DashboardOverviewCardsComponent;
  let fixture: ComponentFixture<DashboardOverviewCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardOverviewCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOverviewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
