import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamListComponent } from './raid-team-list.component';

describe('RaidTeamListComponent', () => {
  let component: RaidTeamListComponent;
  let fixture: ComponentFixture<RaidTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
