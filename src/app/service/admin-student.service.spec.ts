import { TestBed } from '@angular/core/testing';

import { AdminStudentService } from './admin-student.service';

describe('AdminStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminStudentService = TestBed.get(AdminStudentService);
    expect(service).toBeTruthy();
  });
});
