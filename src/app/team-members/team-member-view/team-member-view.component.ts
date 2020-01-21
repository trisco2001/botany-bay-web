import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaidTeamsService, RaidTeam } from 'src/app/core/services/raid-teams.service';
import { TeamMembersService, TeamMember } from 'src/app/core/services/team-members.service';

@Component({
  selector: 'app-team-member-view',
  templateUrl: './team-member-view.component.html',
  styleUrls: ['./team-member-view.component.scss']
})
export class TeamMemberViewComponent implements OnInit {
  raidTeam: RaidTeam;
  teamMember: TeamMember;
  avatarImageUrl: string;
  backgroundImageUrl: string;


  constructor(private route: ActivatedRoute,
    private raidTeamsService: RaidTeamsService,
    private teamMemberService: TeamMembersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const friendlyId = params['friendlyId'];
      const server = params['server'];
      const name = params['name'];

      this.raidTeamsService.getRaidTeamByFriendlyId(friendlyId)
        .subscribe(raidTeam => {
          this.raidTeam = raidTeam;
          this.teamMemberService.getSingleTeamMember(raidTeam.id, `${raidTeam.id}-${server}-${name}`).subscribe(teamMember => {
            this.teamMember = teamMember;
            if (teamMember.characterData && teamMember.characterData.thumbnail) {
              this.avatarImageUrl = "http://render-us.worldofwarcraft.com/character/" + teamMember.characterData.thumbnail;
              this.backgroundImageUrl = this.avatarImageUrl.replace("-avatar.jpg", "-main.jpg");
            }
          })
        });
    })
  }
}
