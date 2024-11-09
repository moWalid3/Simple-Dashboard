import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsGraphComponent } from './stations-graph.component';

describe('StationsGraphComponent', () => {
  let component: StationsGraphComponent;
  let fixture: ComponentFixture<StationsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
