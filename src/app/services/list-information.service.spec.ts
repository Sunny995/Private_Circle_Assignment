import { TestBed } from '@angular/core/testing';

import { ListInformationService } from './list-information.service';

describe('ListInformationService', () => {
  let service: ListInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
