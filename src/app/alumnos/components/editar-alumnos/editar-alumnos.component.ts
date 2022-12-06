import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { editarAlumno } from '../../state/actions/alumnos.actions';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alumnosStore: Store<Alumno>,
    public dialogRef: MatDialogRef<EditarAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [{value: this.alumno.id, disabled: false}],
      nombre: [{value: this.alumno.nombre, disabled: false}],
      apellido: [{value: this.alumno.apellido, disabled: false}],
      fechaNac: [{value: this.alumno.fechaNac, disabled: false}],
      pais: [{value: this.alumno.pais, disabled: false}]
    });
  }

  editar(): void {
    const a: Alumno = {
      id: this.alumno.id,
      nombre: this.form.controls['nombre'].value,
      apellido: this.form.controls['apellido'].value,
      fechaNac: this.form.controls['fechaNac'].value,
      pais: this.form.controls['pais'].value,
    }
    this.alumnosStore.dispatch(editarAlumno({alumno: a}));

    this.dialogRef.close();
  }

}
