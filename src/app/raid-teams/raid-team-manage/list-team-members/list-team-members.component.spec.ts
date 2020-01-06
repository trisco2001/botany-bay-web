import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamMembersComponent } from './list-team-members.component';

describe('ListTeamMembersComponent', () => {
  let component: ListTeamMembersComponent;
  let fixture: ComponentFixture<ListTeamMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeamMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
