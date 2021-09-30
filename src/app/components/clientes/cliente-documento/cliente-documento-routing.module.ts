import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDocumentoCreateComponent } from './cliente-documento-create/cliente-documento-create.component';
import { ClienteDocumentoDeleteComponent } from './cliente-documento-delete/cliente-documento-delete.component';
import { ClienteDocumentoReadComponent } from './cliente-documento-read/cliente-documento-read.component';
import { ClienteDocumentoUpdateComponent } from './cliente-documento-update/cliente-documento-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteDocumentoReadComponent
  },
  {
    path: 'create',
    component: ClienteDocumentoCreateComponent
  },
  {
    path: ':documentoId/delete',
    component: ClienteDocumentoDeleteComponent
  },
  {
    path: ':documentoId/update',
    component: ClienteDocumentoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteDocumentoRoutingModule { }
