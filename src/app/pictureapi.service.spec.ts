import { TestBed } from '@angular/core/testing';

import { PictureapiService } from './pictureapi.service';

describe('PictureapiService', () => {
  let service: PictureapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
