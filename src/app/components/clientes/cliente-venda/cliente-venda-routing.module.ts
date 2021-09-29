import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteVendaCreateComponent } from './cliente-venda-create/cliente-venda-create.component';
import { ClienteVendaDeleteComponent } from './cliente-venda-delete/cliente-venda-delete.component';
import { ClienteVendaReadComponent } from './cliente-venda-read/cliente-venda-read.component';
import { ClienteVendaUpdateComponent } from './cliente-venda-update/cliente-venda-update.component';

const routes: Routes = [
  {
    path: ':clienteId',
    component: ClienteVendaReadComponent
  },
  {
    path: ':clienteId/create',
    component: ClienteVendaCreateComponent
  },
  {
    path: ':clienteId/delete/:id',
    component: ClienteVendaDeleteComponent
  },
  {
    path: ':clienteId/update/:id',
    component: ClienteVendaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteVendaRoutingModule { }
