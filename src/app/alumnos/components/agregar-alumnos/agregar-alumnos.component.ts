import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { FormBuilder, FormGroup } from '@angular/forms';
import { agregarAlumno } from '../../state/actions/alumnos.actions';
import { Router } from '@angular/router';
//import { selectorAlumnosCargados } from 'src/app/state/selectors/alumnos.selector';

@Component({
  selector: 'app-agregar-alumnos',
  templateUrl: './agregar-alumnos.component.html',
  styleUrls: ['./agregar-alumnos.component.css']
})
export class AgregarAlumnosComponent implements OnInit {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alumnosStore: Store<Alumno>
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      fechaNac: [''],
      pais: ['']
    });
  }

  agregar(): void{
    const a: Alumno = {
      //id: this.alumno.id,
      nombre: this.form.controls['nombre'].value,
      apellido: this.form.controls['apellido'].value,
      fechaNac: this.form.controls['fechaNac'].value,
      pais: this.form.controls['pais'].value,
    }
    this.alumnosStore.dispatch(agregarAlumno({alumno: a}));

    this.router.navigate(['home/alumnos/listar-alumnos']);
  }

}
