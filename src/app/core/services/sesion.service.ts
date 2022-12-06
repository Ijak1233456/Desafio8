import { Sesion } from './../../models/sesion';
import { Usuario } from './../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  protected readonly api = "https://6363331137f2167d6f743c3b.mockapi.io/api/";

  protected usr!: string;
  protected contrasena!: string;
  protected sesion!: Sesion;

  sesionSubject!: BehaviorSubject<Sesion>;

  constructor(private http: HttpClient) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  setCredenciales(usr: string, contrasena: string){
    this.usr = usr;
    this.contrasena = contrasena
  }

  getCredenciales(){
    const credenciales = {
      "usr": this.usr,
      "contrasena": this.contrasena
    }
    return credenciales;
  }

  setSesion(usuario: Usuario): void{
    let sesion: Sesion = {
      usuario: usuario,
      sesionActiva: true
    }
    //this.sesion = sesion;
    this.sesionSubject.next(sesion);
  }

  getSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }

  login(usr: string, contrasena: string): Observable<Usuario>{
    return this.http.get<Usuario[]>(this.api + "sesion").pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter((u: Usuario) => u.usuario === usr && u.contrasena === contrasena)[0]
      })
    );
  }

  obtenerUsuarios(){
    return this.http.get(this.api + "sesion");
  }
}
