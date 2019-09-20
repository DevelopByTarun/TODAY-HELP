import { TestBed, inject } from '@angular/core/testing';

import { ObservableserviceService } from './observableservice.service';

describe('ObservableserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableserviceService]
    });
  });

  it('should be created', inject([ObservableserviceService], (service: ObservableserviceService) => {
    expect(service).toBeTruthy();
  }));
});
