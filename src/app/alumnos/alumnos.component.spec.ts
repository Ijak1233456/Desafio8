import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from '../core/components/menu/menu.component';
import { MaterialModule } from '../material.module';

import { AlumnosComponent } from './alumnos.component';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { EliminarAlumnosComponent } from './components/eliminar-alumnos/eliminar-alumnos.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ],
      declarations: [ 
        MenuComponent,
        AlumnosComponent,
        AgregarAlumnosComponent,
        EditarAlumnosComponent,
        EliminarAlumnosComponent,
        ListarAlumnosComponent      
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
