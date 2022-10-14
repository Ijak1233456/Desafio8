import { ListaAlumnosComponent } from './../lista-alumnos/lista-alumnos.component';
import { ContenidoComponent } from './contenido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { CustomCardDirective } from 'src/app/directives/custom-card.directive';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ContenidoComponent,
    ListaAlumnosComponent,
    CustomCardDirective,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    MaterialModule
  ], exports: [
    ContenidoComponent
  ]
})
export class ContenidoModule { }
