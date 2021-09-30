import { MatTooltipModule } from '@angular/material/tooltip';
import { ClienteVendaItemModule } from './../cliente-venda-item/cliente-venda-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteVendaRoutingModule } from './cliente-venda-routing.module';
import { ClienteVendaCreateComponent } from './cliente-venda-create/cliente-venda-create.component';
import { ClienteVendaReadComponent } from './cliente-venda-read/cliente-venda-read.component';
import { ClienteVendaUpdateComponent } from './cliente-venda-update/cliente-venda-update.component';
import { ClienteVendaDeleteComponent } from './cliente-venda-delete/cliente-venda-delete.component';
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
    ClienteVendaCreateComponent,
    ClienteVendaReadComponent,
    ClienteVendaUpdateComponent,
    ClienteVendaDeleteComponent
  ],
  imports: [
    CommonModule,
    ClienteVendaRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    ClienteVendaItemModule,
    MatTooltipModule,
    MatTooltipModule
  ]
})
export class ClienteVendaModule { }
