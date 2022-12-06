import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarCursos } from './state/actions/cursos.actions';
import { CursoState } from './state/reducers/cursos.reducer';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private cursosStore: Store<CursoState>
  ) { }

  ngOnInit(): void {
    this.cursosStore.dispatch(cargarCursos());
  }

}
