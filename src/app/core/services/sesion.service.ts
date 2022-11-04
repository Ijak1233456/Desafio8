import { Usuario } from './../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  protected readonly api = "https://6363331137f2167d6f743c3b.mockapi.io/api/";

  protected usr!: string;
  protected contrasena!: string;

  constructor(private http: HttpClient) { }

  setCredenciales(usr: string, contrasena: string){
    this.usr = usr;
    this.contrasena = contrasena
  }

  getCredenciales(){
    return this.usr;
  }  

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.api + "sesion");
  }
}
