import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Issue from 'src/app/models/issue.model';
import IIssue from 'src/app/models/IIssue';
import { IssuesApiService } from 'src/app/services/issues-api.service';

@Injectable({
  providedIn: 'root',
})
export class IssuesStoreService {
  private readonly _issues = new BehaviorSubject<IIssue[]>([]);

  readonly issues$ = this._issues.asObservable();
  get issues(): IIssue[] {
    return this._issues.getValue();
  }
  set issues(issues: IIssue[]) {
    this._issues.next(issues);
  }

  constructor(private issuesApi: IssuesApiService) {
    this.fetchAll();
  }

  fetchAll(): void {
    this.issuesApi.getAll().subscribe((data) => {
      console.log('Fetched data...');
      console.log(data);
      this.issues = data;
    });
  }
}
