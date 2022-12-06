import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnos from '../reducers/alumnos.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnos.AlumnoState>(
  fromAlumnos.alumnosFeatureKey
);

export const selectAlumnosCargando = createSelector( 
  selectAlumnosState,
  (state) => state.cargando
)

export const selectAlumnos = createSelector(
  selectAlumnosState,
  (state) => state.alumnos
)

// export const selectStateAlumnos = createSelector(
//   selectAlumnosState,
//   (state: AlumnoState) => state.alumnos
// )

// export const selectorAlumnosCargados = createSelector(
//   selectAlumnosState,
//   (state: AlumnoState) => state.alumnos
// )