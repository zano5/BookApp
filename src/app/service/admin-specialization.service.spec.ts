import { TestBed } from '@angular/core/testing';

import { AdminSpecializationService } from './admin-specialization.service';

describe('AdminSpecializationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminSpecializationService = TestBed.get(AdminSpecializationService);
    expect(service).toBeTruthy();
  });
});
