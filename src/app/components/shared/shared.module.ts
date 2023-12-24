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
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


//Formularios
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';









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
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule

  ],
  exports: [
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ]
})
export class SharedModule { }
