import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteLembreteRoutingModule } from './cliente-lembrete-routing.module';
import { ClienteLembreteCreateComponent } from './cliente-lembrete-create/cliente-lembrete-create.component';
import { ClienteLembreteReadComponent } from './cliente-lembrete-read/cliente-lembrete-read.component';
import { ClienteLembreteUpdateComponent } from './cliente-lembrete-update/cliente-lembrete-update.component';
import { ClienteLembreteDeleteComponent } from './cliente-lembrete-delete/cliente-lembrete-delete.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipeModule } from '../../shared/pipe/pipe.module';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    ClienteLembreteCreateComponent,
    ClienteLembreteReadComponent,
    ClienteLembreteUpdateComponent,
    ClienteLembreteDeleteComponent
  ],
  imports: [
    CommonModule,
    ClienteLembreteRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    PipeModule,
    MatDatepickerModule
  ]
})
export class ClienteLembreteModule { }
