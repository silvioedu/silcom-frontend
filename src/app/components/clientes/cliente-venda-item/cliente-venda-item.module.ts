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


@NgModule({
  declarations: [
    ClienteVendaItemReadComponent
  ],
  imports: [
    CommonModule,
    ClienteVendaItemRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule
  ],
  exports: [
    ClienteVendaItemReadComponent
  ]
})
export class ClienteVendaItemModule { }
