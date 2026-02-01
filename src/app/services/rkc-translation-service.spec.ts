import { TestBed } from '@angular/core/testing';

import { RkcTranslationService } from '../rkc-translation-service';

describe('RkcTranslationService', () => {
  let service: RkcTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RkcTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
