import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormaPagamentoTipoRoutingModule } from './forma-pagamento-tipo-routing.module';
import { FormaPagamentoTipoCreateComponent } from './forma-pagamento-tipo-create/forma-pagamento-tipo-create.component';
import { FormaPagamentoTipoReadComponent } from './forma-pagamento-tipo-read/forma-pagamento-tipo-read.component';
import { FormaPagamentoTipoUpdateComponent } from './forma-pagamento-tipo-update/forma-pagamento-tipo-update.component';
import { FormaPagamentoTipoDeleteComponent } from './forma-pagamento-tipo-delete/forma-pagamento-tipo-delete.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PipeModule } from '../../shared/pipe/pipe.module';


@NgModule({
  declarations: [
    FormaPagamentoTipoCreateComponent,
    FormaPagamentoTipoReadComponent,
    FormaPagamentoTipoUpdateComponent,
    FormaPagamentoTipoDeleteComponent
  ],
  imports: [
    CommonModule,
    FormaPagamentoTipoRoutingModule,
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
export class FormaPagamentoTipoModule { }
