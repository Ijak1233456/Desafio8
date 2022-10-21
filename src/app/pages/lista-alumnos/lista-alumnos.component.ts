import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { ListaService } from './services/lista.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {
  
  alumnos$!: Observable<Alumno[]>;

  alumno: any;

  columnas: string[] = ['id','nombre', 'fecha Nac', 'pais', 'acciones'];

  //dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos$);

  paisElegido: string = 'Perú';

  constructor(private listaService: ListaService) {
  }

  ngOnInit(): void { 
    this.alumnos$ = this.listaService.obtenerAlumnos();

    this.alumno = this.listaService.obtenerAlumnos().subscribe(
      {
        next: (alumnos: Alumno[]) => {

          let edades: any;
          alumnos.map(alumno => {
            edades = this.calcularEdad(alumno.fechaNac);
            console.log(edades);
          });
          
        },
      }
    );

    
    //this.calcularEdad(this.listaAlumnos[0].fechaNac);
  }

  ngOnDestroy(): void {
    this.alumno.unsubscribe();
  }

  calcularEdad(fecha: Date){
    let fechaActual: Date = new Date();

    let edad: number = Math.round((fechaActual.getTime() - fecha.getTime())/ (1000*60*60*24*365));

    return edad
  }

  editar(){
    
  }

}
