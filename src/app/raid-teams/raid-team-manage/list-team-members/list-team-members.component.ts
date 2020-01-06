import { Component, OnInit, Input } from '@angular/core';
import { TeamMembersService } from 'src/app/core/services/team-members.service';

@Component({
  selector: 'app-list-team-members',
  templateUrl: './list-team-members.component.html',
  styleUrls: ['./list-team-members.component.scss']
})
export class ListTeamMembersComponent implements OnInit {
  @Input("raidTeamId") raidTeamId: string;

  teamMembers;

  constructor(private teamMemberService: TeamMembersService) { }

  ngOnInit() {
    this.teamMemberService.getAllTeamMembers(this.raidTeamId).subscribe(teamMembers => {
      this.teamMembers = teamMembers.Items;
    });
  }

}
