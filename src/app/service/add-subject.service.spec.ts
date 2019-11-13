import { TestBed } from '@angular/core/testing';

import { AddSubjectService } from './add-subject.service';

describe('AddSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSubjectService = TestBed.get(AddSubjectService);
    expect(service).toBeTruthy();
  });
});
