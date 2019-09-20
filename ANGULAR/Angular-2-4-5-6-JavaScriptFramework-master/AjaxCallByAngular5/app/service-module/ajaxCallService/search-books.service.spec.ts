import { TestBed, inject } from '@angular/core/testing';

import { SearchBooksService } from './search-books.service';

describe('SearchBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBooksService]
    });
  });

  it('should be created', inject([SearchBooksService], (service: SearchBooksService) => {
    expect(service).toBeTruthy();
  }));
});
