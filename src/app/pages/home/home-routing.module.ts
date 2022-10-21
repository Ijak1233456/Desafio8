import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from '../producto/producto.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    { path: 'producto', component: ProductoComponent },
    { path: 'lista-alumnos', component: ListaAlumnosComponent}    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
