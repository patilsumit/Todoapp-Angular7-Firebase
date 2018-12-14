import { TestBed } from '@angular/core/testing';

import { CrudservicesService } from './crudservices.service';

describe('CrudservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudservicesService = TestBed.get(CrudservicesService);
    expect(service).toBeTruthy();
  });
});
