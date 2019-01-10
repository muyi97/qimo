import { TestBed } from '@angular/core/testing';

import { ConstellationService } from './constellation.service';

describe('ConstellationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstellationService = TestBed.get(ConstellationService);
    expect(service).toBeTruthy();
  });
});
