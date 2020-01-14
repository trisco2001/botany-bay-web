import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthorizationResponse {
  authToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlizzyAuthService {
  apiUrl = "http://localhost:3001/auth";

  static token: string;

  constructor(private httpClient: HttpClient) { }

  async refreshToken() {
    this.httpClient.get<AuthorizationResponse>(`${this.apiUrl}`).subscribe(authResponse => {
      BlizzyAuthService.token = authResponse.authToken;
    })
  }
}
