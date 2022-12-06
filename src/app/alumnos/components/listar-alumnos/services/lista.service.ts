import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  protected readonly api = "https://6363331137f2167d6f743c3b.mockapi.io/api/";

  // private listaAlumnos: Alumno[] = [
  //   {id: 1, nombre: 'marcos',  fechaNac: new Date("1998/05/26"), pais: 'Brasil'},
  //   {id: 2, nombre: 'luciana', fechaNac: new Date("1997/05/26"), pais: 'Mexico'},
  //   {id: 3, nombre: 'renato', fechaNac: new Date("1996/05/26"), pais: 'Perú'},
  //   {id: 4, nombre: 'pedro', fechaNac: new Date("1995/05/26"), pais: 'Uruguay'},
  //   {id: 5, nombre: 'mariah', fechaNac: new Date("1994/05/26"), pais: 'USA'}
  // ];

 //private alumnosSubject: BehaviorSubject<Alumno[]>;

  constructor(private http: HttpClient) {
    //this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.listaAlumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    //return this.alumnosSubject.asObservable();
    return this.http.get<Alumno[]>(this.api + "/alumnos");
  }

  // calcularEdad(fechaNac: Date): Observable<Alumno[]>{

  //   return this.obtenerAlumnos().pipe(
  //     map((cursos: Alumno[]) => cursos.filter((alumno: Alumno) => alumno.fechaNac === fechaNac))
  //   )
  // }
}
