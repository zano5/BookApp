import { TestBed } from '@angular/core/testing';

import { LoginDAOService } from './login-dao.service';

describe('LoginDAOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginDAOService = TestBed.get(LoginDAOService);
    expect(service).toBeTruthy();
  });
});
