import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamOverTimeChartComponent } from './raid-team-over-time-chart.component';

describe('RaidTeamOverTimeChartComponent', () => {
  let component: RaidTeamOverTimeChartComponent;
  let fixture: ComponentFixture<RaidTeamOverTimeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamOverTimeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamOverTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
