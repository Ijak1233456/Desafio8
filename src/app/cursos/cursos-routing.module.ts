import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { CursosComponent } from './cursos.component';
import { ListarCursosComponent } from './components/listar-cursos/listar-cursos.component';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'listar-cursos', pathMatch: 'full' },
  { path: '', component: CursosComponent, children: [
    { path: 'listar-cursos', component: ListarCursosComponent},
    { path: 'agregar-cursos', component: AgregarCursosComponent, canActivate: [AdminGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
