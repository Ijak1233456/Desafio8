import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AlumnosComponent } from './alumnos.component';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar-alumnos', pathMatch: 'full' },
  { path: '', component: AlumnosComponent, children: [
    { path: 'listar-alumnos', component: ListarAlumnosComponent},
    { path: 'agregar-alumnos', component: AgregarAlumnosComponent, canActivate: [AdminGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
