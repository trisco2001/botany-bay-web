import { Component, OnInit, Input } from '@angular/core';
import { RaidTeam } from 'src/app/core/services/raid-teams.service';
import { TeamMember } from 'src/app/core/services/team-members.service';

@Component({
  selector: 'app-character-header',
  templateUrl: './character-header.component.html',
  styleUrls: ['./character-header.component.scss']
})
export class CharacterHeaderComponent implements OnInit {
  @Input() avatarImageUrl: string;
  @Input() raidTeam: RaidTeam;
  @Input() teamMember: TeamMember;

  constructor() { }

  ngOnInit() {
  }

}
