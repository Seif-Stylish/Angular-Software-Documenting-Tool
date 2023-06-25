import { TestBed } from '@angular/core/testing';

import { SdlcDataService } from './sdlc-data.service';

describe('SdlcDataService', () => {
  let service: SdlcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdlcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
