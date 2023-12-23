import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos 
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,

  ],
  exports: [
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
  ]
})
export class SharedModule { }
