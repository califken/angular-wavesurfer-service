import { TestBed } from '@angular/core/testing';

import { AngularWavesurferServiceService } from './angular-wavesurfer-service.service';

describe('AngularWavesurferServiceService', () => {
  let service: AngularWavesurferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWavesurferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
