import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/components/login/login.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./home/home.module')
    .then( m => m.HomeModule), canActivate: [AutenticacionGuard]},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
