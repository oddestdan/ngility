import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IssuesStoreService } from 'src/app/services/issues-store.service';
import IIssue from 'src/app/models/IIssue';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.scss'],
})
export class DragDropListComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress = ['In Progress'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  get issues(): Observable<IIssue[]> {
    return this.issuesStore.issues$;
  }

  getFilteredIssues(status: String): Observable<IIssue[]> {
    return this.issuesStore.issues$.pipe(
      map((issues: IIssue[]) => issues.filter((i) => i.status === status))
    );
  }

  constructor(private issuesStore: IssuesStoreService) {
    // issuesStore.issues$.subscribe((data) => {
    // console.log('Fetched data in drag-drop...');
    // console.log(data);
    // });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
