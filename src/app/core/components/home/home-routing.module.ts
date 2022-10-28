import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlumnosComponent } from 'src/app/alumnos/listar-alumnos/listar-alumnos.component';
import { ProductoComponent } from 'src/app/alumnos/producto/producto.component';
import { AgregarAlumnosComponent } from 'src/app/alumnos/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from 'src/app/alumnos/editar-alumnos/editar-alumnos.component';
import { EliminarAlumnosComponent } from 'src/app/alumnos/eliminar-alumnos/eliminar-alumnos.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'home/listar-alumnos', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'producto', component: ProductoComponent },
    { path: 'listar-alumnos', component: ListarAlumnosComponent},
    { path: 'agregar-alumnos', component: AgregarAlumnosComponent},
    { path: 'editar-alumnos', component: EditarAlumnosComponent},
    { path: 'eliminar-alumnos', component: EliminarAlumnosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
