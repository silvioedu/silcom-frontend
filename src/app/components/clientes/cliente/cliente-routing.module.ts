import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteReadComponent
  },
  {
    path: 'create',
    component: ClienteCreateComponent
  },
  {
    path: 'delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'update/:id',
    component: ClienteUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
