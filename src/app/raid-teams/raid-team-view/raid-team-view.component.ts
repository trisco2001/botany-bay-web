import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaidTeamsService } from 'src/app/core/services/raid-teams.service';
import { TeamMembersService, AllTeamMembersResponse } from 'src/app/core/services/team-members.service';
import { isNullOrUndefined } from 'util';
import { ClassService } from 'src/app/core/services/class.service';
import { RolesService } from 'src/app/core/services/roles.service';

interface TeamMember {
  name: string;
  server: string;
  id: string;
  characterData?: any;
  className: string;
  color: string;
}

interface Role {
  averageItemLevel: number;
  count: number;
  members: TeamMember[];
  icon: string;
  name: string;
  description: string;
}

interface Roster {
  tanks: Role;
  healers: Role;
  rdps: Role;
  mdps: Role;
  unset: Role;
}

interface RaidTeam {
  name: string;
  server: string;
  createdAt: number;
  id: string;
  friendlyId: string;
  updatedAt: string;
}

@Component({
  selector: 'app-raid-team-view',
  templateUrl: './raid-team-view.component.html',
  styleUrls: ['./raid-team-view.component.scss']
})
export class RaidTeamViewComponent implements OnInit {
  raidTeam: RaidTeam;
  roster: Roster;
  allTeamMembers;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private raidTeamsService: RaidTeamsService,
    private teamMembersService: TeamMembersService,
    private classService: ClassService,
    private rolesService: RolesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const friendlyId = params['friendlyId'];

      this.raidTeamsService.getRaidTeamByFriendlyId(friendlyId)
        .subscribe(raidTeam => {
          this.raidTeam = raidTeam;
          this.teamMembersService.getAllTeamMembers(this.raidTeam.id).subscribe(allTeamMembers => {
            this.allTeamMembers = allTeamMembers;
            this.roster = {
              tanks: this.statsForRole(allTeamMembers, "tank"),
              healers: this.statsForRole(allTeamMembers, "healer"),
              rdps: this.statsForRole(allTeamMembers, "rdps"),
              mdps: this.statsForRole(allTeamMembers, "mdps"),
              unset: this.statsForRole(allTeamMembers, null),
            }
          })
        });
    })
  }

  private statsForRole(allTeamMembers: AllTeamMembersResponse, role?: string) {
    const members = this.membersMatchingRole(allTeamMembers, role);
    const membersWithItemLevel = members.filter(t => t.characterData && t.characterData.items && t.characterData.items.averageItemLevelEquipped);
    const roleInfo = this.rolesService.roles[role || "unset"];
    if (membersWithItemLevel.length === 0) {
      return { averageItemLevel: NaN, count: members.length, members, description: roleInfo.description, name: roleInfo.name, icon: roleInfo.icon };
    }
    const averageItemLevel = membersWithItemLevel.map(t => t.characterData.items.averageItemLevelEquipped).reduce((prev, current) => prev + current) / membersWithItemLevel.length;
    return { averageItemLevel, count: members.length, members, description: roleInfo.description, name: roleInfo.name, icon: roleInfo.icon };
  }

  navigateToManage() {
    this.router.navigate(['raid-teams', this.raidTeam.friendlyId, 'manage'] );
  }

  private membersMatchingRole(allTeamMembers: AllTeamMembersResponse, role?: string) {
    const convertedTeamMembers = allTeamMembers.Items.map(rawMember => {
      return {
        name: rawMember.name,
        server: rawMember.server,
        id: rawMember.id,
        role: rawMember.role,
        characterData: rawMember.characterData,
        className: this.classService.classes[rawMember.characterData.class].name,
        color: this.classService.classes[rawMember.characterData.class].color
      }
    });
    if (!role) {
      return convertedTeamMembers.filter(i => isNullOrUndefined(i.role));
    } else {
      return convertedTeamMembers.filter(i => i.role === role);
    }
  }
}
