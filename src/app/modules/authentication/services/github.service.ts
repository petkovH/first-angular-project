import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  apiUrl = 'https://api.github.com/users';
  users!: string[];
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }
}
