import { Component, OnInit } from '@angular/core';
import { RaidTeamsService } from 'src/app/core/services/raid-teams.service';
import { ActivatedRoute } from '@angular/router';
import { TeamManagerService } from './services/team-manager.service';

@Component({
  selector: 'app-raid-team-manage',
  templateUrl: './raid-team-manage.component.html',
  styleUrls: ['./raid-team-manage.component.scss'],
  providers: [TeamManagerService]
})
export class RaidTeamManageComponent implements OnInit {
  raidTeam;

  constructor(private route: ActivatedRoute,
    private raidTeamsService: RaidTeamsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const friendlyId = params['friendlyId'];

      this.raidTeamsService.getRaidTeamByFriendlyId(friendlyId)
        .subscribe(raidTeam => {
          this.raidTeam = raidTeam;
        });
    })
  }

}
