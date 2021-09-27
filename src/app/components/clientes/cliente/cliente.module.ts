import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './cliente-read/cliente-read.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';


@NgModule({
  declarations: [
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class ClienteModule { }
