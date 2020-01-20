import { Component, OnInit } from '@angular/core';
import { RaidTeamsService } from 'src/app/core/services/raid-teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raid-team-create',
  templateUrl: './raid-team-create.component.html',
  styleUrls: ['./raid-team-create.component.scss']
})
export class RaidTeamCreateComponent implements OnInit {
  name: string;
  server: string;
  friendlyId: string;
  enabled = true;

  constructor(private raidTeamsService: RaidTeamsService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.enabled = false;
    this.raidTeamsService.createRaidTeam(this.name, this.server, this.friendlyId)
      .subscribe(observer => {
        this.enabled = true;
        this.router.navigate(['raid-teams', this.friendlyId, 'manage'])
      });
  }
}
