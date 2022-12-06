import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EditarAlumnosComponent } from 'src/app/alumnos/components/editar-alumnos/editar-alumnos.component';
import { Clase } from 'src/app/models/clase';
import { Curso } from 'src/app/models/curso';
import { editarCurso } from '../../state/actions/cursos.actions';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {
  form!: FormGroup;

  clases: Clase[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cursosStore: Store<Curso>,
    public dialogRef: MatDialogRef<EditarAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.curso.clases.forEach((claseRecuperada: Clase, i: number) => {
      let clase: Clase = {
        nro: i + 1,
        nombre: claseRecuperada.nombre
      }
      this.clases.push(clase);
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [{value: this.curso.id, disabled: false}],
      nombre: [{value: this.curso.nombre, disabled: false}],
      comision: [{value: this.curso.comision, disabled: false}],
      profesor: [{value: this.curso.profesor, disabled: false}],
      fechaInicio: [{value: this.curso.fechaInicio, disabled: false}],
      fechaFin: [{value: this.curso.fechaFin, disabled: false}],
      clase: [{value: '', disabled: false}],
      inscripcionAbierta: [{value: this.curso.inscripcionAbierta, disabled: false}],
      imagen: [{value: this.curso.imagen, disabled: false}],
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
    this.clases.forEach( (clase, i) => {
      clase.nro = i + 1;
    });
  }

  editar(): void {
    const c: Curso = {
      id: this.curso.id,
      nombre: this.form.controls['nombre'].value,
      comision: this.form.controls['comision'].value,
      profesor: this.form.controls['profesor'].value,
      fechaInicio: this.form.controls['fechaInicio'].value,
      fechaFin: this.form.controls['fechaFin'].value,
      inscripcionAbierta: this.form.controls['inscripcionAbierta'].value,
      imagen: 'https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png',
      clases: this.clases
    }
    this.cursosStore.dispatch(editarCurso({curso: c}));

    this.dialogRef.close();
  }
}
