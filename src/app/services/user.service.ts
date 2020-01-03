import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "https://api.github.com/users";

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(`${this.apiUrl}?per_page=20`);
  }

  getSingleUser(username: String) {
    return this.httpClient.get(`${this.apiUrl}/${username}`);
  }
}
