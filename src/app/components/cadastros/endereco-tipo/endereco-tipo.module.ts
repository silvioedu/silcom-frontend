import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoTipoRoutingModule } from './endereco-tipo-routing.module';
import { EnderecoTipoCreateComponent } from './endereco-tipo-create/endereco-tipo-create.component';
import { EnderecoTipoReadComponent } from './endereco-tipo-read/endereco-tipo-read.component';
import { EnderecoTipoUpdateComponent } from './endereco-tipo-update/endereco-tipo-update.component';
import { EnderecoTipoDeleteComponent } from './endereco-tipo-delete/endereco-tipo-delete.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipeModule } from '../../shared/pipe/pipe.module';


@NgModule({
  declarations: [
    EnderecoTipoCreateComponent,
    EnderecoTipoReadComponent,
    EnderecoTipoUpdateComponent,
    EnderecoTipoDeleteComponent
  ],
  imports: [
    CommonModule,
    EnderecoTipoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule,
    PipeModule
  ]
})
export class EnderecoTipoModule { }
