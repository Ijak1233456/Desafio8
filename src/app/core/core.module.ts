import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { sesionFeatureKey, reducer } from './state/reducers/sesion.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionDisponibleDirective } from './directives/inscripcion-disponible.directive';
import { ConvertirBooleanPipe } from './pipes/convertir-boolean.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PaginaNoEncontradaComponent,    
    InscripcionDisponibleDirective, 
    ConvertirBooleanPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    StoreModule.forFeature(sesionFeatureKey, reducer),
    EffectsModule.forFeature([])
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PaginaNoEncontradaComponent,
    InscripcionDisponibleDirective,
    ConvertirBooleanPipe,
  ]
})
export class CoreModule { }
