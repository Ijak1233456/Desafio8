import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { SesionService } from '../services/sesion.service';
import { selectSesionActiva } from '../state/selectors/sesion.selectors';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>
  ){ }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.store.select(selectSesionActiva).pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['']);
            return false;
          }
        })
      );

      // this.sesionService.getSesion().subscribe(console.log);
      
      // return this.sesionService.getSesion().pipe(
      //   map((sesion: Sesion) => {
      //     if(sesion.sesionActiva){
      //       return true;
      //     }else{
      //       this.router.navigate(['']);
      //       return false;
      //     }
      //   })
      // );

  }
  
}
