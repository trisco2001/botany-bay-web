import { Component, OnInit } from '@angular/core';
import { RaidTeamsService } from 'src/app/core/services/raid-teams.service';

@Component({
  selector: 'app-raid-team-list',
  templateUrl: './raid-team-list.component.html',
  styleUrls: ['./raid-team-list.component.scss']
})
export class RaidTeamListComponent implements OnInit {
  raidTeams;

  constructor(private raidTeamsService: RaidTeamsService) { }

  ngOnInit() {
    this.raidTeamsService.getAllRaidTeams().subscribe((raidTeamsResponse) => {
      this.raidTeams = raidTeamsResponse.Items;
    });
  }

}
