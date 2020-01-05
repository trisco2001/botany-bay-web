import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamManageComponent } from './raid-team-manage.component';

describe('RaidTeamManageComponent', () => {
  let component: RaidTeamManageComponent;
  let fixture: ComponentFixture<RaidTeamManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
