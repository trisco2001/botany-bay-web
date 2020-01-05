import { Component, OnInit } from '@angular/core';
import { RaidTeamsService } from 'src/app/core/services/raid-teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raid-team-manage',
  templateUrl: './raid-team-manage.component.html',
  styleUrls: ['./raid-team-manage.component.scss']
})
export class RaidTeamManageComponent implements OnInit {
  raidTeam;

  constructor(private route: ActivatedRoute,
    private raidTeamsService: RaidTeamsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.raidTeamsService.getSingleRaidTeam(id)
        .subscribe(raidTeam => {
          this.raidTeam = raidTeam;
        });
    })
  }

}
