import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormaPagamentoTipoCreateComponent } from './forma-pagamento-tipo-create/forma-pagamento-tipo-create.component';
import { FormaPagamentoTipoDeleteComponent } from './forma-pagamento-tipo-delete/forma-pagamento-tipo-delete.component';
import { FormaPagamentoTipoReadComponent } from './forma-pagamento-tipo-read/forma-pagamento-tipo-read.component';
import { FormaPagamentoTipoUpdateComponent } from './forma-pagamento-tipo-update/forma-pagamento-tipo-update.component';

const routes: Routes = [
  {
    path: '',
    component: FormaPagamentoTipoReadComponent
  },
  {
    path: 'create',
    component: FormaPagamentoTipoCreateComponent
  },
  {
    path: 'delete/:id',
    component: FormaPagamentoTipoDeleteComponent
  },
  {
    path: 'update/:id',
    component: FormaPagamentoTipoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormaPagamentoTipoRoutingModule { }
