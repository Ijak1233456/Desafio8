import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { alumnosFeatureKey, reducer } from './state/reducers/alumnos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlumnosEffects } from './state/effects/alumnos.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { EliminarAlumnosComponent } from './components/eliminar-alumnos/eliminar-alumnos.component';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';



@NgModule({
  declarations: [
    AlumnosComponent,
    ListarAlumnosComponent,
    AgregarAlumnosComponent,
    EditarAlumnosComponent,
    EliminarAlumnosComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(alumnosFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosEffects]),
  ]
})
export class AlumnosModule { }
