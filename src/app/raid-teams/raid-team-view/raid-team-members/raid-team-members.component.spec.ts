import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamMembersComponent } from './raid-team-members.component';

describe('RaidTeamMembersComponent', () => {
  let component: RaidTeamMembersComponent;
  let fixture: ComponentFixture<RaidTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
