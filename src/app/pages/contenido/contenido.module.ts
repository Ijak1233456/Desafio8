import { ListaAlumnosComponent } from './../lista-alumnos/lista-alumnos.component';
import { ContenidoComponent } from './contenido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { CustomCardDirective } from 'src/app/directives/custom-card.directive';


@NgModule({
  declarations: [
    ContenidoComponent,
    MenuComponent,
    ListaAlumnosComponent,
    CustomCardDirective
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule
  ], exports: [
    ContenidoComponent
  ]
})
export class ContenidoModule { }
