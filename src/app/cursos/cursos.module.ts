import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { EliminarCursosComponent } from './components/eliminar-cursos/eliminar-cursos.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CursosComponent } from './cursos.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CursosEffects } from './state/effects/cursos.effects';
import { cursosFeatureKey, reducer } from './state/reducers/cursos.reducer';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursosComponent,
    ListarCursosComponent,
    EditarCursosComponent,
    EliminarCursosComponent,
    AgregarCursosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(cursosFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects]),
  ]
})
export class CursosModule { }
