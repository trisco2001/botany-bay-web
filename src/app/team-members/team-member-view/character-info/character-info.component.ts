import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RaidTeam } from 'src/app/core/services/raid-teams.service';
import { TeamMember } from 'src/app/core/services/team-members.service';
import { ClassService } from 'src/app/core/services/class.service';
import { ItemLevelService } from 'src/app/core/services/item-level.service';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit, OnChanges {
  @Input() backgroundImageUrl: string;
  @Input() raidTeam: RaidTeam;
  @Input() teamMember: TeamMember;

  className: string;
  roleName: string;
  averageItemLevel: number;

  constructor(private classService: ClassService,
    private itemLevelsService: ItemLevelService,
    private rolesService: RolesService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.teamMember) {
      this.className = this.classService.classes[this.teamMember.characterData.class].name;
      this.averageItemLevel = this.itemLevelsService.calculateItemLevel(this.teamMember.characterData);
      this.roleName = this.rolesService.roles[this.teamMember.role].name;
    }
  }

}
