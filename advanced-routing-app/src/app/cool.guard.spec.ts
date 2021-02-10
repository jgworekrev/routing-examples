import { TestBed } from '@angular/core/testing';

import { CoolGuard } from './cool.guard';

describe('CoolGuard', () => {
  let guard: CoolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
