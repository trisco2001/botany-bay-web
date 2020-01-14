import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface TeamMember {
  id: string;
  raidTeamId: string;
  name: string;
  server: string;
  characterData: any;
}

@Injectable({
  providedIn: 'root'
})
export class TeamManagerService {
  private teamMemberCreatedSource = new Subject<TeamMember>();

  teamMemberCreated = this.teamMemberCreatedSource.asObservable();
  
  announceTeamMemberCreated(teamMember: TeamMember) {
    this.teamMemberCreatedSource.next(teamMember);
  }
}
