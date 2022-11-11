import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ListarAlumnosComponent } from './listar-alumnos.component';

describe('ListaAlumnosComponent', () => {
  let component: ListarAlumnosComponent;
  let fixture: ComponentFixture<ListarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAlumnosComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando ingreso unicamente la comision del curso', () => {
    const formulario = component.formulario;
    const comision = formulario.controls['comision'];

    comision.setValue('32350');

    expect(formulario.valid).toBeFalse();
  })
});
