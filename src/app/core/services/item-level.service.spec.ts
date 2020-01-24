import { TestBed } from '@angular/core/testing';

import { ItemLevelService } from './item-level.service';

describe('ItemLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemLevelService = TestBed.get(ItemLevelService);
    expect(service).toBeTruthy();
  });
});
