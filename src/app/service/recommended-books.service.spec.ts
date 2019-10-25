import { TestBed } from '@angular/core/testing';

import { RecommendedBooksService } from './recommended-books.service';

describe('RecommendedBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendedBooksService = TestBed.get(RecommendedBooksService);
    expect(service).toBeTruthy();
  });
});
