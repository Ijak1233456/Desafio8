import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: Alumno[];
  paisElegido: string = 'Perú';

  constructor() {
    this.listaAlumnos  = [
      {nombre: 'marcos',  fechaNac: new Date("1998/05/26"), pais: 'Brasil'},
      {nombre: 'luciana', fechaNac: new Date("1998/05/26"), pais: 'Mexico'},
      {nombre: 'renato', fechaNac: new Date("1998/05/26"), pais: 'Perú'},
      {nombre: 'pedro', fechaNac: new Date("1998/05/26"), pais: 'Uruguay'},
      {nombre: 'mariah', fechaNac: new Date("1998/05/26"), pais: 'USA'}
    ]
  }

  ngOnInit(): void {
    this.calcularEdad(this.listaAlumnos[0].fechaNac);
  }

  calcularEdad(fecha: Date){
    let fechaActual: Date = new Date();

    let edad: number = Math.round((fechaActual.getTime() - fecha.getTime())/ (1000*60*60*24*365));

    return edad
  }

}
