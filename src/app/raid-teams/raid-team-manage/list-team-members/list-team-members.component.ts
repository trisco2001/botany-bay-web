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

  teamMembers;

  constructor(
    private teamMemberService: TeamMembersService,
    teamManagerService: TeamManagerService) {
      teamManagerService.teamMemberCreated.subscribe(teamMember => {
        this.refreshTeamList();
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
