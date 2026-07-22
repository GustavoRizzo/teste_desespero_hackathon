import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiControleClassicoService } from './api-controle-classico.service';

describe('ApiControleClassicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', () => {
    const service: ApiControleClassicoService = TestBed.inject(ApiControleClassicoService);
    expect(service).toBeTruthy();
  });
});
