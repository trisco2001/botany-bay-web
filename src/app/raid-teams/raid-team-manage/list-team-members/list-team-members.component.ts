import { Component, OnInit, Input } from '@angular/core';
import { TeamMembersService } from 'src/app/core/services/team-members.service';
import { TeamManagerService } from '../services/team-manager.service';
import { ClassService, ClassRole } from 'src/app/core/services/class.service';

interface TeamMember {
  name: string;
  id: string;
  characterData?: any;
  role?: string
}

@Component({
  selector: 'app-list-team-members',
  templateUrl: './list-team-members.component.html',
  styleUrls: ['./list-team-members.component.scss']
})
export class ListTeamMembersComponent implements OnInit {
  @Input("raidTeamId") raidTeamId: string;

  teamMembers: Array<TeamMember>;

  constructor(
    private teamMemberService: TeamMembersService,
    private classService: ClassService,
    teamManagerService: TeamManagerService) {
      teamManagerService.teamMemberCreated.subscribe(teamMember => {
        this.teamMembers = this.teamMembers.concat([teamMember]).sort((a, b) => a.name.localeCompare(b.name));
      });
     }

  ngOnInit() {
    this.refreshTeamList();
  }

  getButtonState(teamMember: TeamMember, role: ClassRole) {
    return teamMember.role == role ? 'is-active' : '';
  }
  

  supportsRole(teamMember: TeamMember, role: ClassRole) {
    return this.classService.classes[teamMember.characterData.class].supportedRoles.indexOf(role) != -1;
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
