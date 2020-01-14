import { Component, OnInit, Input } from '@angular/core';
import { TeamMembersService } from 'src/app/core/services/team-members.service';
import { TeamManagerService } from '../services/team-manager.service';

@Component({
  selector: 'app-list-team-members',
  templateUrl: './list-team-members.component.html',
  styleUrls: ['./list-team-members.component.scss']
})
export class ListTeamMembersComponent implements OnInit {
  @Input("raidTeamId") raidTeamId: string;

  teamMembers: Array<{name: string}>;

  constructor(
    private teamMemberService: TeamMembersService,
    teamManagerService: TeamManagerService) {
      teamManagerService.teamMemberCreated.subscribe(teamMember => {
        this.teamMembers = this.teamMembers.concat([teamMember]).sort((a, b) => a.name.localeCompare(b.name));
      });
     }

  ngOnInit() {
    this.refreshTeamList();
  }


  private refreshTeamList() {
    this.teamMemberService.getAllTeamMembers(this.raidTeamId).subscribe(teamMembers => {
      this.teamMembers = teamMembers.Items;
    });
  }
}
