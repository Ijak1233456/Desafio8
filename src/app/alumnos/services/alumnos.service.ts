import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  obtenerAlumnos(): Observable<Alumno[]>{
    //return this.alumnosSubject.asObservable();
    return this.http.get<Alumno[]>(`${environment.api}/alumnos`);
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${environment.api}/alumnos`, alumno);
  }

  editarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${environment.api}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${environment.api}/alumnos/${alumno.id}`);
  }
}
