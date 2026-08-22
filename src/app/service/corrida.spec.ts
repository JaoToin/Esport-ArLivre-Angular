import { TestBed } from '@angular/core/testing';

import { Corrida } from './corrida';

describe('Corrida', () => {
  let service: Corrida;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Corrida);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
