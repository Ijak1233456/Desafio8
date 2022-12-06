import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from '../state/selectors/sesion.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private sesionStore: Store<Sesion>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.sesionStore.select(selectSesionActiva).pipe(
          map((sesion: Sesion) => {
            if(sesion.usuario?.isAdmin){
              return true;
            }else{
              alert("No tiene permisos para acceder a este sitio");
              return false;
            }
          })
        );
  }
}
