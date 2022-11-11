import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SesionService } from './sesion.service';
import { of } from 'rxjs';

describe('SesionService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: SesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    //service = TestBed.inject(SesionService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SesionService(httpClientSpy as any);
  });

  it('El servicio se instancia correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {
    const mockDatos = [
      {
        "usuario": "Deshawn.Turner",
        "contrasena": "V4t1aMLegb1k82B",
        "isAdmin": false,
        "Nombre": "Lola",
        "Apellido": "Kunde",
        "id": "1"
      },
      {
        "usuario": "Casimir82",
        "contrasena": "RN921i4StF4HqdQ",
        "isAdmin": true,
        "Nombre": "Amanda",
        "Apellido": "Wiegand",
        "id": "2"
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuarios().subscribe((usuarios) => {
      const mockDatos2 = [
        {
          "usuario": "Deshawn.Turner",
          "contrasena": "V4t1aMLegb1k82B",
          "isAdmin": false,
          "Nombre": "Lola",
          "Apellido": "Kunde",
          "id": "1"
        },
        {
          "usuario": "Casimir82",
          "contrasena": "RN921i4StF4HqdQ",
          "isAdmin": true,
          "Nombre": "Amanda",
          "Apellido": "Wiegand",
          "id": "2"
        }
      ];
      expect(usuarios).toEqual(mockDatos2);
      done();
    })
  })
});
