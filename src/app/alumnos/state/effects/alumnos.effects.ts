import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as AlumnosActions from '../actions/alumnos.actions';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Injectable()
export class AlumnosEffects {
  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(AlumnosActions.cargarAlumnos),
      concatMap(() => this.alumnosService.obtenerAlumnos().pipe(
        map((a: Alumno[]) => AlumnosActions.alumnosCargados({alumnos: a}))
      ))
    );
  });

  agregarInscripciones$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(AlumnosActions.agregarAlumno),
      concatMap(({ alumno }) => this.alumnosService.agregarAlumno(alumno).pipe(
        map((a: Alumno) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.eliminarAlumno),
      concatMap(({ alumno }) => this.alumnosService.eliminarAlumno(alumno).pipe(
        map((a: Alumno) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  editarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnosActions.editarAlumno),
      concatMap(({ alumno }) => this.alumnosService.editarAlumno(alumno).pipe(
        map((a: Alumno) => AlumnosActions.cargarAlumnos())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private alumnosService: AlumnosService
  ) {}
}