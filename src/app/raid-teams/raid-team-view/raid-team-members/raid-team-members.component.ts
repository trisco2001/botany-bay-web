import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raid-team-members',
  templateUrl: './raid-team-members.component.html',
  styleUrls: ['./raid-team-members.component.scss']
})
export class RaidTeamMembersComponent implements OnInit {
  @Input() roster;
  @Input() raidTeam;
  constructor() { }

  ngOnInit() {
  }

}
