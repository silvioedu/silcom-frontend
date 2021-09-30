import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteVendaItemReadComponent } from './cliente-venda-item-read/cliente-venda-item-read.component';

const routes: Routes = [
  {
    path: 'clienteId:clienteId&vendaId:vendaId',
    component: ClienteVendaItemReadComponent
  }
  // {
  //   path: ':clienteId/create',
  //   component: ClienteVendaItemCreateComponent
  // },
  // {
  //   path: ':clienteId/delete/:id',
  //   component: ClienteVendaItemDeleteComponent
  // },
  // {
  //   path: ':clienteId/update/:id',
  //   component: ClienteVendaItemUpdateComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteVendaItemRoutingModule { }
