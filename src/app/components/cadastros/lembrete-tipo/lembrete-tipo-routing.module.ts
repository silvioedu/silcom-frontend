import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LembreteTipoCreateComponent } from './lembrete-tipo-create/lembrete-tipo-create.component';
import { LembreteTipoDeleteComponent } from './lembrete-tipo-delete/lembrete-tipo-delete.component';
import { LembreteTipoReadComponent } from './lembrete-tipo-read/lembrete-tipo-read.component';
import { LembreteTipoUpdateComponent } from './lembrete-tipo-update/lembrete-tipo-update.component';

const routes: Routes = [
  {
    path: '',
    component: LembreteTipoReadComponent
  },
  {
    path: 'create',
    component: LembreteTipoCreateComponent
  },
  {
    path: ':id/delete',
    component: LembreteTipoDeleteComponent
  },
  {
    path: ':id/update',
    component: LembreteTipoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LembreteTipoRoutingModule { }
