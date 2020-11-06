import { TestBed } from '@angular/core/testing';

import { ContentItemService } from './content-item.service';

describe('ContentItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentItemService = TestBed.get(ContentItemService);
    expect(service).toBeTruthy();
  });
});
