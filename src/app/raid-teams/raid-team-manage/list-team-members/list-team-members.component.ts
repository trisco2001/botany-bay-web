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

  teamMembers: Array<{name: string, id: string, role?: string}>;

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
      this.teamMembers = teamMembers.Items.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  deleteTeamMember(teamMember: {id: string}) {
    this.teamMemberService.removeRaidTeamMember(this.raidTeamId, teamMember.id).subscribe(_ => {
      this.teamMembers = this.teamMembers.filter(value => value.id != teamMember.id);
    });
  }

  setRole(teamMember: {id: string}, role: string) {
    this.teamMemberService.setTeamMemberRole(this.raidTeamId, teamMember.id, role).subscribe(_ => {
      this.teamMembers = this.teamMembers.map(value => {
        if (value.id == teamMember.id) {
          value.role = role;
        }
        return value;
      })
    })
  }
}
