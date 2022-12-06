import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Clase } from 'src/app/models/clase';
import { Curso } from 'src/app/models/curso';
import { agregarCurso } from '../../state/actions/cursos.actions';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent implements OnInit {
  form!: FormGroup;

  clases: Clase[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cursosStore: Store<Curso>,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [{value: '', disabled: false}],
      nombre: [{value: '', disabled: false}, Validators.required],
      comision: [{value: '', disabled: false}],
      profesor: [{value: '', disabled: false}],
      fechaInicio: [{value: '', disabled: false}],
      fechaFin: [{value: '', disabled: false}],
      clase: [{value: '', disabled: false}],
      inscripcionAbierta: [{value: false, disabled: false}],
      //imagen: [{value: this.curso.imagen, disabled: false}],
    });
  }

  agregarClase(): void {
    let clase: Clase = {
      nro: this.clases.length + 1,
      nombre: this.form.controls['clase'].value
    }
    this.clases.push(clase);
    this.form.controls['clase'].reset();
  }

  eliminarClase(nro: number): void {
    this.clases.splice(nro, 1);
  }

  agregar(): void {
    const c: Curso = {
      nombre: this.form.controls['nombre'].value,
      comision: this.form.controls['comision'].value,
      profesor: this.form.controls['profesor'].value,
      fechaInicio: this.form.controls['fechaInicio'].value,
      fechaFin: this.form.controls['fechaFin'].value,
      inscripcionAbierta: this.form.controls['inscripcionAbierta'].value,
      imagen: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
      clases: this.clases
    }
    this.cursosStore.dispatch(agregarCurso({curso: c}));
    this.router.navigate(['home/cursos/listar-cursos']);
  }
}
