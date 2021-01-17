import { TestBed } from '@angular/core/testing';

import { VaccNowService } from './vacc-now.service';

describe('VaccNowService', () => {
  let service: VaccNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
