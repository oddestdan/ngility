import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import IIssue from 'src/app/models/IIssue';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IssuesApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IIssue[]>(`${API_URL}/issue`);
  }

  create(issue: IIssue) {
    return this.http.post<IIssue>(`${API_URL}/issue`, issue);
  }

  remove(id: string) {
    return this.http.delete(`${API_URL}/issue/${id}`);
  }

  edit(id: string, issue: IIssue) {
    return this.http.put(`${API_URL}/issue/${id}`, { ...issue });
  }
}
