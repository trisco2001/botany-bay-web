import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamInfoComponent } from './raid-team-info.component';

describe('RaidTeamInfoComponent', () => {
  let component: RaidTeamInfoComponent;
  let fixture: ComponentFixture<RaidTeamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
