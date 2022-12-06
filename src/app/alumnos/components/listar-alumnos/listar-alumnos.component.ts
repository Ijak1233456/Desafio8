import { selectSesionActiva } from './../../../core/state/selectors/sesion.selectors';
import { Observable, Subscription, take } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Store } from '@ngrx/store';
import { AlumnoState } from 'src/app/models/alumno.state';
import { selectAlumnos } from '../../state/selectors/alumnos.selectors';
import { MatDialog } from '@angular/material/dialog';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';
import { eliminarAlumno } from '../../state/actions/alumnos.actions';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit, OnDestroy{
  
  alumnos$!: Observable<Alumno[]>;
  suscripcion!: Subscription;
  alumnos!: Alumno[];

  alumno: any;

  sesionSubscription!: Subscription;
  isAdmin!: boolean;

  columnas: string[] = ['id','nombre', 'fecha Nac', 'pais', 'acciones'];

  paisElegido: string = 'Perú';

  constructor(
    private dialog: MatDialog,
    private storeSesion: Store<Sesion>,
    private storeAlumnos: Store<AlumnoState>
  ) {
  }
  
  ngOnInit(): void { 
    this.sesionSubscription = this.storeSesion.select(selectSesionActiva).pipe(take(1))
    .subscribe({
      next: (sesion) => {this.isAdmin = sesion.usuario!.isAdmin}
    });
    this.alumnos$ = this.storeAlumnos.select(selectAlumnos);
  }
  
  ngOnDestroy(): void {
    this.sesionSubscription.unsubscribe();
  }

  calcularEdad(fecha: Date){
    let fechaActual: Date = new Date();

    let edad: number = Math.round((fechaActual.getTime() - fecha.getTime())/ (1000*60*60*24*365));

    return edad
  }

  editar(alumno: Alumno){
    this.dialog.open(EditarAlumnosComponent, {
      data: alumno
    });    
  }

  eliminar(alumno: Alumno){
    this.storeAlumnos.dispatch(eliminarAlumno({alumno}));
  }

}

