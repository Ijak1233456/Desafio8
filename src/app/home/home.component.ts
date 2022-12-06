import { cargarAlumnos } from '../alumnos/state/actions/alumnos.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ListaService } from '../alumnos/components/listar-alumnos/services/lista.service';
import { AlumnoState } from '../models/alumno.state';
import { cargarCursos } from '../cursos/state/actions/cursos.actions';
import { CursoState } from '../cursos/state/reducers/cursos.reducer';
//import { AppState } from '../state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  suscripcion!: Subscription;
  
  constructor(
    private listaService: ListaService,
    //private store: Store<AppState>
    private alumnosStore: Store<AlumnoState>
  ) {
    this.alumnosStore.dispatch(cargarAlumnos());    
  }

  ngOnInit(): void {
    // this.suscripcion = this.listaService.obtenerAlumnos().subscribe({
    //   next: (alumnos) => {
    //     //this.alumnos = alumnos;
    //     console.log("actualizando el store");
        
    //     this.store.dispatch( alumnosCargados({ alumnos: alumnos }) );

    //     console.log("Se agregaron los cursos al store");
    //   }
    // });
  }

}
