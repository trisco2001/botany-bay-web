import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamViewComponent } from './raid-team-view.component';

describe('RaidTeamViewComponent', () => {
  let component: RaidTeamViewComponent;
  let fixture: ComponentFixture<RaidTeamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
