import { TestBed } from '@angular/core/testing';

import { IssuesStoreService } from './issues-store.service';

describe('IssuesStoreService', () => {
  let service: IssuesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
