import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clase } from '../models/clase';
import { Curso } from '../models/curso';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases!: Clase[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ) { }

  ngOnInit(): void {
    this.clases = this.curso.clases;
  }

}
