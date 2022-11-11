import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(
    private sesionService: SesionService,
    private router: Router
  ){ }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      this.sesionService.getSesion().subscribe(console.log);

      if (this.sesionService.getSesion()) {
        console.log(this.sesionService.getSesion());
        
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
      

  }
  
}
