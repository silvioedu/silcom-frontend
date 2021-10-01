import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoTipoCreateComponent } from './endereco-tipo-create/endereco-tipo-create.component';
import { EnderecoTipoDeleteComponent } from './endereco-tipo-delete/endereco-tipo-delete.component';
import { EnderecoTipoReadComponent } from './endereco-tipo-read/endereco-tipo-read.component';
import { EnderecoTipoUpdateComponent } from './endereco-tipo-update/endereco-tipo-update.component';

const routes: Routes = [
  {
    path: '',
    component: EnderecoTipoReadComponent
  },
  {
    path: 'create',
    component: EnderecoTipoCreateComponent
  },
  {
    path: ':id/delete',
    component: EnderecoTipoDeleteComponent
  },
  {
    path: ':id/update',
    component: EnderecoTipoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoTipoRoutingModule { }
