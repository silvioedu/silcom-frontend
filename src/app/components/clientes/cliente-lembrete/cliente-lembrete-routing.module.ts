import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteLembreteCreateComponent } from './cliente-lembrete-create/cliente-lembrete-create.component';
import { ClienteLembreteDeleteComponent } from './cliente-lembrete-delete/cliente-lembrete-delete.component';
import { ClienteLembreteReadComponent } from './cliente-lembrete-read/cliente-lembrete-read.component';
import { ClienteLembreteUpdateComponent } from './cliente-lembrete-update/cliente-lembrete-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteLembreteReadComponent
  },
  {
    path: 'create',
    component: ClienteLembreteCreateComponent
  },
  {
    path: ':lembreteId/delete',
    component: ClienteLembreteDeleteComponent
  },
  {
    path: ':lembreteId/update',
    component: ClienteLembreteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteLembreteRoutingModule { }
