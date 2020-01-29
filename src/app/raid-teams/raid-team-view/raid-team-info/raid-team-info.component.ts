import { Component, OnInit, Input } from '@angular/core';
import { RaidTeam } from 'src/app/core/services/raid-teams.service';

@Component({
  selector: 'app-raid-team-info',
  templateUrl: './raid-team-info.component.html',
  styleUrls: ['./raid-team-info.component.scss']
})
export class RaidTeamInfoComponent implements OnInit {
  @Input() roster;
  @Input() raidTeam: RaidTeam;

  constructor() { }

  ngOnInit() {
  }

}
