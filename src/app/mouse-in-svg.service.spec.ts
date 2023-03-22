import { TestBed } from '@angular/core/testing';

import { MouseInSvgService } from './mouse-in-svg.service';

describe('MouseInSvgService', () => {
  let service: MouseInSvgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouseInSvgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
