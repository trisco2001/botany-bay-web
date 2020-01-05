import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTeamCreateComponent } from './raid-team-create.component';

describe('RaidTeamCreateComponent', () => {
  let component: RaidTeamCreateComponent;
  let fixture: ComponentFixture<RaidTeamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTeamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTeamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
