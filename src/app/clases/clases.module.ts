import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesComponent } from './clases.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ClasesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ClasesModule { }
