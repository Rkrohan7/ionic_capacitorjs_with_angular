import { TestBed } from '@angular/core/testing';

import { ScreenReaderService } from './screen-reader.service';

describe('ScreenReaderService', () => {
  let service: ScreenReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
