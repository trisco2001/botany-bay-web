import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface TeamMember {
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

export interface TeamMemberMetric {
  raidTeamMemberId: string;
  timestamp: number;
  averageItemLevel: number;
}

export interface TeamMemberMetricsResponse {
  Items: TeamMemberMetric[];
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
  apiUrl = `${environment.apiUrl}/raid-teams`;

  constructor(private httpClient: HttpClient) { }

  getAllTeamMembers(raidTeamId: string) {
    return this.httpClient.get<AllTeamMembersResponse>(`${this.apiUrl}/${raidTeamId}/team-members`);
  }

  getSingleTeamMember(raidTeamId: string, id: string) {
    return this.httpClient.get<TeamMember>(`${this.apiUrl}/${raidTeamId}/team-members/${id}`);
  }

  getSingleTeamMemberMetrics(raidTeamId: string, id: string) {
    return this.httpClient.get<TeamMemberMetricsResponse>(`${this.apiUrl}/${raidTeamId}/team-members/${id}/metrics`);
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