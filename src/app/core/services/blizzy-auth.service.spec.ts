import { TestBed } from '@angular/core/testing';

import { BlizzyAuthService } from './blizzy-auth.service';

describe('BlizzyAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlizzyAuthService = TestBed.get(BlizzyAuthService);
    expect(service).toBeTruthy();
  });
});
