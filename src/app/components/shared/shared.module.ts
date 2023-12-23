import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos 
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule

  ],
  exports: [
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
