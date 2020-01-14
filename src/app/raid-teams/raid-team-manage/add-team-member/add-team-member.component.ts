import { Component, OnInit, Input } from '@angular/core';
import { TeamMembersService } from 'src/app/core/services/team-members.service';
import { TeamManagerService } from '../services/team-manager.service';

import { webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.scss']
})
export class AddTeamMemberComponent implements OnInit {
  @Input("raidTeamId") raidTeamId: string;
  name: string;
  server: string;

  constructor(private teamMembersService: TeamMembersService,
    private teamManagerService: TeamManagerService) { }

  ngOnInit() {
  }

  submitForm() {
    this.teamMembersService.addRaidTeamMember(
      this.raidTeamId,
      this.name,
      this.server).subscribe(addTeamMemberResponse => {
        const extendedInfoSocket = webSocket<any>(addTeamMemberResponse.webSocketUrl).subscribe(
          _ => {
          this.teamManagerService.announceTeamMemberCreated({name: this.name, server: this.server});
          this.name = "";
          this.server = "";
          extendedInfoSocket.unsubscribe();
        });
      });
  }
}
