import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: '', component: HomeComponent, children:[
    { path: 'alumnos', loadChildren: () => import('../alumnos/alumnos.module')
      .then( m => m.AlumnosModule)
    },
    { path: 'cursos', loadChildren: () => import('../cursos/cursos.module')
      .then( m => m.CursosModule)
      // .then( m => m.AlumnosModule), canActivate: [AutenticacionGuard]},
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
