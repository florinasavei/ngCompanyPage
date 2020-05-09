import { TestBed } from '@angular/core/testing';

import { UiHelpService } from './ui-help.service';

describe('UiHelpService', () => {
  let service: UiHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
