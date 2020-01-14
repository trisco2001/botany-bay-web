import { Component, OnInit, Input } from '@angular/core';
import { TeamMembersService } from 'src/app/core/services/team-members.service';
import { TeamManagerService } from '../services/team-manager.service';

import { webSocket, WebSocketSubject} from 'rxjs/webSocket';

interface WebSocketResponse {
  raidTeamId: string;
  id: string;
  server: string;
  name: string;
  characterData: any;
}

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
        this.name = "";

        const extendedInfoSocket = webSocket<WebSocketResponse>(addTeamMemberResponse.webSocketUrl).subscribe(
          webSocketResponse => {
          this.teamManagerService.announceTeamMemberCreated(webSocketResponse);
          extendedInfoSocket.unsubscribe();
        });
      });
  }
}
