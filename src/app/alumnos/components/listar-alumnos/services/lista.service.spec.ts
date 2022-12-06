import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListaService } from './lista.service';

describe('ListaService', () => {
  let service: ListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
