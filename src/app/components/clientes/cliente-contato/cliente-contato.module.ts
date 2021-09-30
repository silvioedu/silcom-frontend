import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteContatoRoutingModule } from './cliente-contato-routing.module';
import { ClienteContatoCreateComponent } from './cliente-contato-create/cliente-contato-create.component';
import { ClienteContatoReadComponent } from './cliente-contato-read/cliente-contato-read.component';
import { ClienteContatoUpdateComponent } from './cliente-contato-update/cliente-contato-update.component';
import { ClienteContatoDeleteComponent } from './cliente-contato-delete/cliente-contato-delete.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ClienteContatoCreateComponent,
    ClienteContatoReadComponent,
    ClienteContatoUpdateComponent,
    ClienteContatoDeleteComponent
  ],
  imports: [
    CommonModule,
    ClienteContatoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class ClienteContatoModule { }
