import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';

import { AgregarCursosComponent } from './agregar-cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { Clase } from 'src/app/models/clase';
import { By } from '@angular/platform-browser';

describe('AgregarCursosComponent', () => {
  let component: AgregarCursosComponent;
  let fixture: ComponentFixture<AgregarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(provideMockStore)
      ],
      declarations: [ AgregarCursosComponent, MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene válido cuando ingreso la nombre del curso', () => {
    const formulario = component.form;
    const comision = formulario.controls['nombre'];

    comision.setValue('Angular');

    expect(formulario.valid).toBeTrue();
  });

  it('El formulario se mantiene inválido cuando ingreso únicamente la comisión del curso', () => {
    const formulario = component.form;
    const nombre = formulario.controls['comision'];   

    nombre.setValue('31456');

    expect(formulario.valid).toBeFalse();
  });

  it('Se agregan las clases al arreglo de clases', () => {
    const formulario = component.form;
    const clase = formulario.controls['clase'];
    
    clase.setValue('Introducción a Angular');
    
    const boton = fixture.debugElement.query(By.css('#btnAgregar'))
    boton.nativeElement.click();
    console.log(boton.nativeElement);
    fixture.detectChanges();


    const clases = component.clases;

    expect(clases[clases.length-1]).toEqual({ nro: 0, nombre: 'Introducción a Angular'});
  })
});
