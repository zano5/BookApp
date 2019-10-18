import { TestBed } from '@angular/core/testing';

import { RegisterDAOService } from './register-dao.service';

describe('RegisterDAOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterDAOService = TestBed.get(RegisterDAOService);
    expect(service).toBeTruthy();
  });
});
