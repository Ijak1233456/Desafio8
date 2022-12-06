import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { ClasesModule } from '../clases/clases.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    ClasesModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
