import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteEnderecoRoutingModule } from './cliente-endereco-routing.module';
import { ClienteEnderecoCreateComponent } from './cliente-endereco-create/cliente-endereco-create.component';
import { ClienteEnderecoReadComponent } from './cliente-endereco-read/cliente-endereco-read.component';
import { ClienteEnderecoUpdateComponent } from './cliente-endereco-update/cliente-endereco-update.component';
import { ClienteEnderecoDeleteComponent } from './cliente-endereco-delete/cliente-endereco-delete.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PipeModule } from '../../shared/pipe/pipe.module';


@NgModule({
  declarations: [
    ClienteEnderecoCreateComponent,
    ClienteEnderecoReadComponent,
    ClienteEnderecoUpdateComponent,
    ClienteEnderecoDeleteComponent
  ],
  imports: [
    CommonModule,
    ClienteEnderecoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    PipeModule
  ]
})
export class ClienteEnderecoModule { }
