import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardDirective } from '../core/directives/custom-card.directive';
import { ListarAlumnosComponent } from './listar-alumnos/listar-alumnos.component';
import { MaterialModule } from '../material.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { EditarAlumnosComponent } from './editar-alumnos/editar-alumnos.component';
import { EliminarAlumnosComponent } from './eliminar-alumnos/eliminar-alumnos.component';
import { AgregarAlumnosComponent } from './agregar-alumnos/agregar-alumnos.component';



@NgModule({
  declarations: [
    CustomCardDirective,
    ListarAlumnosComponent,    
    EditarAlumnosComponent,
    EliminarAlumnosComponent,
    AgregarAlumnosComponent,
  ],
  imports: [
    CommonModule,

    AlumnosRoutingModule,
    MaterialModule    
  ]
})
export class AlumnosModule { }
