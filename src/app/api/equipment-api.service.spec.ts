import { TestBed } from '@angular/core/testing';

import { EquipmentApiService } from './equipment-api.service';

describe('EquipmentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipmentApiService = TestBed.get(EquipmentApiService);
    expect(service).toBeTruthy();
  });
});
