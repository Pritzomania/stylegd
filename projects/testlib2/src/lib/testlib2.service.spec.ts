import { TestBed } from '@angular/core/testing';

import { Testlib2Service } from './testlib2.service';

describe('Testlib2Service', () => {
  let service: Testlib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Testlib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
