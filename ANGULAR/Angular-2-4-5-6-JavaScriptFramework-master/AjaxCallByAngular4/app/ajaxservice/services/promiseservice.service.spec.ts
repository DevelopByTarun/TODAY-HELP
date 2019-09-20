import { TestBed, inject } from '@angular/core/testing';

import { PromiseserviceService } from './promiseservice.service';

describe('PromiseserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromiseserviceService]
    });
  });

  it('should be created', inject([PromiseserviceService], (service: PromiseserviceService) => {
    expect(service).toBeTruthy();
  }));
});
