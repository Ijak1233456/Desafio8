import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: Alumno[] = [
    {idUsuario: 1, nombre: 'marcos',  fechaNac: new Date("1998/05/26"), pais: 'Brasil'},
    {idUsuario: 2, nombre: 'luciana', fechaNac: new Date("1998/05/26"), pais: 'Mexico'},
    {idUsuario: 3, nombre: 'renato', fechaNac: new Date("1998/05/26"), pais: 'Perú'},
    {idUsuario: 4, nombre: 'pedro', fechaNac: new Date("1998/05/26"), pais: 'Uruguay'},
    {idUsuario: 5, nombre: 'mariah', fechaNac: new Date("1998/05/26"), pais: 'USA'}
  ];
  columnas: string[] = ['id','nombre', 'fecha Nac', 'pais', 'acciones'];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.listaAlumnos);

  paisElegido: string = 'Perú';

  constructor() {
  }

  ngOnInit(): void {
    this.calcularEdad(this.listaAlumnos[0].fechaNac);
  }

  calcularEdad(fecha: Date){
    let fechaActual: Date = new Date();

    let edad: number = Math.round((fechaActual.getTime() - fecha.getTime())/ (1000*60*60*24*365));

    return edad
  }

  editar(){
    
  }

}
