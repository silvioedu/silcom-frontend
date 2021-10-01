import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteVendaItemRoutingModule } from './cliente-venda-item-routing.module';
import { ClienteVendaItemReadComponent } from './cliente-venda-item-read/cliente-venda-item-read.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ClienteVendaItemCreateComponent } from './cliente-venda-item-create/cliente-venda-item-create.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ClienteVendaItemReadComponent,
    ClienteVendaItemCreateComponent
  ],
  imports: [
    CommonModule,
    ClienteVendaItemRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    ClienteVendaItemReadComponent
  ]
})
export class ClienteVendaItemModule { }
