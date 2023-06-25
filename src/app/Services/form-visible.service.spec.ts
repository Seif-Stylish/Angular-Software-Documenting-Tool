import { TestBed } from '@angular/core/testing';

import { FormVisibleService } from './form-visible.service';

describe('FormVisibleService', () => {
  let service: FormVisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormVisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
