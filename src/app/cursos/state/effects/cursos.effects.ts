import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as CursosActions from '../actions/cursos.actions';
import { CursosService } from '../../services/cursos.service';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosEffects {
  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(CursosActions.cargarCursos),
      concatMap(() => this.cursosService.obtenerCursos().pipe(
        map((c: Curso[]) => CursosActions.cursosCargados({cursos: c}))
      ))
    );
  });

  agregarInscripciones$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(CursosActions.agregarCurso),
      concatMap(({ curso }) => this.cursosService.agregarCurso(curso).pipe(
        map((c: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.eliminarCurso),
      concatMap(({ curso }) => this.cursosService.eliminarCurso(curso).pipe(
        map((c: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  editarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CursosActions.editarCurso),
      concatMap(({ curso }) => this.cursosService.editarCurso(curso).pipe(
        map((c: Curso) => CursosActions.cargarCursos())
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private cursosService: CursosService
  ) {}
}
