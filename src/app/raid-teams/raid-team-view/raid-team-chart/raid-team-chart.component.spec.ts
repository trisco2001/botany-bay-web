import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamChartComponent } from './raid-team-chart.component';

describe('RaidTeamChartComponent', () => {
  let component: RaidTeamChartComponent;
  let fixture: ComponentFixture<RaidTeamChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
