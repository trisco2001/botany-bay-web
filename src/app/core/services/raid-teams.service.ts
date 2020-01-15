import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface RaidTeam {
  name: string;
  server: string;
  createdAt: number;
  id: string;
  updatedAt: string;
}

interface AllRaidTeamsResponse {
  Items: RaidTeam[];
  Count: number;
  ScannedCount: number;
}

interface CreateRaidTeamResponse {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RaidTeamsService {
  apiUrl = `${environment.apiUrl}/raid-teams`;

  constructor(private httpClient: HttpClient) { }

  getAllRaidTeams() {
    return this.httpClient.get<AllRaidTeamsResponse>(`${this.apiUrl}`);
  }

  getSingleRaidTeam(id: string) {
    return this.httpClient.get<RaidTeam>(`${this.apiUrl}/${id}`);
  }

  createRaidTeam(name: string, server: string) {
    return this.httpClient.post<CreateRaidTeamResponse>(`${this.apiUrl}`, { name: name, server: server });
  }

}
