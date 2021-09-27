import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteContatoCreateComponent } from './cliente-contato-create/cliente-contato-create.component';
import { ClienteContatoDeleteComponent } from './cliente-contato-delete/cliente-contato-delete.component';
import { ClienteContatoReadComponent } from './cliente-contato-read/cliente-contato-read.component';
import { ClienteContatoUpdateComponent } from './cliente-contato-update/cliente-contato-update.component';

const routes: Routes = [
  {
    path: ':clienteId',
    component: ClienteContatoReadComponent
  },
  {
    path: ':clienteId/create',
    component: ClienteContatoCreateComponent
  },
  {
    path: ':clienteId/delete/:id',
    component: ClienteContatoDeleteComponent
  },
  {
    path: ':clienteId/update/:id',
    component: ClienteContatoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteContatoRoutingModule { }
