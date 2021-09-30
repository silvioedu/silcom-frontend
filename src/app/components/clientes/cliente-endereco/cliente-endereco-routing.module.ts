import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteEnderecoCreateComponent } from './cliente-endereco-create/cliente-endereco-create.component';
import { ClienteEnderecoDeleteComponent } from './cliente-endereco-delete/cliente-endereco-delete.component';
import { ClienteEnderecoReadComponent } from './cliente-endereco-read/cliente-endereco-read.component';
import { ClienteEnderecoUpdateComponent } from './cliente-endereco-update/cliente-endereco-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteEnderecoReadComponent
  },
  {
    path: 'create',
    component: ClienteEnderecoCreateComponent
  },
  {
    path: ':enderecoId/delete',
    component: ClienteEnderecoDeleteComponent
  },
  {
    path: ':enderecoId/update',
    component: ClienteEnderecoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteEnderecoRoutingModule { }
