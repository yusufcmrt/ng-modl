import { TestBed } from '@angular/core/testing';

import { NgModlService } from './ng-modl.service';

describe('NgModlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgModlService = TestBed.get(NgModlService);
    expect(service).toBeTruthy();
  });
});
