import { TestBed } from '@angular/core/testing';

import { KittyApiService } from './kitty-api.service';

describe('KittyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittyApiService = TestBed.get(KittyApiService);
    expect(service).toBeTruthy();
  });
});
