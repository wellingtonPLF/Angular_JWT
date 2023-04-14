import { TestBed } from '@angular/core/testing';

import { AuthActivateGuard } from './authActivate.guard';

describe('AuthActivateGuard', () => {
  let guard: AuthActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
