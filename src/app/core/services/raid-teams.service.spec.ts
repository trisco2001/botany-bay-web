import { TestBed } from '@angular/core/testing';

import { RaidTeamsService } from './raid-teams.service';

describe('RaidTeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaidTeamsService = TestBed.get(RaidTeamsService);
    expect(service).toBeTruthy();
  });
});
