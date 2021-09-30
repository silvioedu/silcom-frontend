import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteDocumentoRoutingModule } from './cliente-documento-routing.module';
import { ClienteDocumentoCreateComponent } from './cliente-documento-create/cliente-documento-create.component';
import { ClienteDocumentoReadComponent } from './cliente-documento-read/cliente-documento-read.component';
import { ClienteDocumentoUpdateComponent } from './cliente-documento-update/cliente-documento-update.component';
import { ClienteDocumentoDeleteComponent } from './cliente-documento-delete/cliente-documento-delete.component';
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
    ClienteDocumentoCreateComponent,
    ClienteDocumentoReadComponent,
    ClienteDocumentoUpdateComponent,
    ClienteDocumentoDeleteComponent
  ],
  imports: [
    CommonModule,
    ClienteDocumentoRoutingModule,
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
export class ClienteDocumentoModule { }
