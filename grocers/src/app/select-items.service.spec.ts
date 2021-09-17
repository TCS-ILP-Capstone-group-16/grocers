import { TestBed } from '@angular/core/testing';

import { SelectItemsService } from './select-items.service';

describe('SelectItemsService', () => {
  let service: SelectItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
