import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from '../../state/selectors/sesion.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sesion$!: Observable<Sesion>;

  constructor(
    private router: Router,
    private store: Store<Sesion>
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }

  logout(): void {
    this.router.navigate(['']);
  }

}
