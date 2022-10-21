import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private listaAlumnos: Alumno[] = [
    {idUsuario: 1, nombre: 'marcos',  fechaNac: new Date("1998/05/26"), pais: 'Brasil'},
    {idUsuario: 2, nombre: 'luciana', fechaNac: new Date("1998/05/26"), pais: 'Mexico'},
    {idUsuario: 3, nombre: 'renato', fechaNac: new Date("1998/05/26"), pais: 'Perú'},
    {idUsuario: 4, nombre: 'pedro', fechaNac: new Date("1998/05/26"), pais: 'Uruguay'},
    {idUsuario: 5, nombre: 'mariah', fechaNac: new Date("1998/05/26"), pais: 'USA'}
  ];

  private alumnosSubject: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.listaAlumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnosSubject.asObservable();
  }

  calcularEdad(fechaNac: Date): Observable<Alumno[]>{

    return this.obtenerAlumnos().pipe(
      map((cursos: Alumno[]) => cursos.filter((alumno: Alumno) => alumno.fechaNac === fechaNac))
    )
  }
}
