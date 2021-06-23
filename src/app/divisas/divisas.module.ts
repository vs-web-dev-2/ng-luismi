import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DivisasRoutingModule } from './divisas-routing.module';
import { DivisasComponent } from './divisas.component';


@NgModule({
  declarations: [
    DivisasComponent
  ],
  imports: [
    CommonModule,
    DivisasRoutingModule,
    HttpClientModule,
  ]
})
export class DivisasModule { }
