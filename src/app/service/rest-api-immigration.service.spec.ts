import { TestBed } from '@angular/core/testing';

import { RestApiImmigrationService } from './rest-api-immigration.service';

describe('RestApiImmigrationService', () => {
  let service: RestApiImmigrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiImmigrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
