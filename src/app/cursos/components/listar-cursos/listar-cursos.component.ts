import { Observable, Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CursoState } from '../../state/reducers/cursos.reducer';
import { selectCursos } from '../../state/selectors/cursos.selectors';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';
import { eliminarCurso } from '../../state/actions/cursos.actions';
import { ClasesComponent } from 'src/app/clases/clases.component';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from 'src/app/core/state/selectors/sesion.selectors';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>;

  sesionSubscription!: Subscription;
  isAdmin!: Boolean

  constructor(
    private dialog: MatDialog,    
    private storeSesion: Store<Sesion>,
    private storeCursos: Store<CursoState>
  ) { }
  
  ngOnInit(): void {
    this.sesionSubscription = this.storeSesion.select(selectSesionActiva).pipe(take(1))
    .subscribe({
      next: (sesion) => {this.isAdmin = sesion.usuario!.isAdmin}
    });
    this.cursos$ = this.storeCursos.select(selectCursos);
  }

  editarCurso(curso: Curso): void {
    this.dialog.open(EditarCursosComponent, {
      data: curso
    });
  }

  eliminarCurso(curso: Curso): void {
    this.storeCursos.dispatch(eliminarCurso({curso}));
  }

  verDetalle(curso: Curso): void {
    this.dialog.open(ClasesComponent, {
      data: curso
    })
  }
}
