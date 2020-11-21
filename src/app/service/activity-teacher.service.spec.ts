import { TestBed } from '@angular/core/testing';

import { ActivityTeacherService } from './activity-teacher.service';

describe('ActivityTeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityTeacherService = TestBed.get(ActivityTeacherService);
    expect(service).toBeTruthy();
  });
});
