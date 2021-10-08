import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LembreteTipoRoutingModule } from './lembrete-tipo-routing.module';
import { LembreteTipoCreateComponent } from './lembrete-tipo-create/lembrete-tipo-create.component';
import { LembreteTipoReadComponent } from './lembrete-tipo-read/lembrete-tipo-read.component';
import { LembreteTipoUpdateComponent } from './lembrete-tipo-update/lembrete-tipo-update.component';
import { LembreteTipoDeleteComponent } from './lembrete-tipo-delete/lembrete-tipo-delete.component';
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
    LembreteTipoCreateComponent,
    LembreteTipoReadComponent,
    LembreteTipoUpdateComponent,
    LembreteTipoDeleteComponent
  ],
  imports: [
    CommonModule,
    LembreteTipoRoutingModule,
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
export class LembreteTipoModule { }
