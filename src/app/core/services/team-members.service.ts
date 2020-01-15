import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface TeamMember {
  name: string;
  server: string;
  raidTeamId: string;
  createdAt: number;
  id: string;
  updatedAt: string;
  characterData?: any;
  role?: string;
}

export interface AllTeamMembersResponse {
  Items: TeamMember[];
  Count: number;
  ScannedCount: number;
}

interface AddTeamMemberResponse {
  id: string;
  webSocketUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  apiUrl = "https://ddve24bdm8.execute-api.us-west-2.amazonaws.com/dev/raid-teams";

  constructor(private httpClient: HttpClient) { }

  getAllTeamMembers(raidTeamId: string) {
    return this.httpClient.get<AllTeamMembersResponse>(`${this.apiUrl}/${raidTeamId}/team-members`);
  }

  getSingleTeamMember(raidTeamId: string, id: string) {
    return this.httpClient.get<AddTeamMemberResponse>(`${this.apiUrl}/${raidTeamId}/team-members/${id}`);
  }

  addRaidTeamMember(raidTeamId: string, name: string, server: string) {
    return this.httpClient.post<AddTeamMemberResponse>(`${this.apiUrl}/${raidTeamId}/team-members`, { name: name, server: server });
  }

  removeRaidTeamMember(raidTeamId: string, id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${raidTeamId}/team-members/${id}`);
  }

  setTeamMemberRole(raidTeamId: string, id: string, role: string) {
    return this.httpClient.put(`${this.apiUrl}/${raidTeamId}/team-members/${id}`, {role});
  }

}