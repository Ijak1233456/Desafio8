import { HomeModule } from './components/home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';


@NgModule({
  declarations: [
    PaginaNoEncontradaComponent,    
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    
    PaginaNoEncontradaComponent
  ]
})
export class CoreModule { }
