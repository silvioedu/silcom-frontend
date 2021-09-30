import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './produto-delete/produto-delete.component';
import { ProdutoReadComponent } from './produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoReadComponent
  },
  {
    path: 'create',
    component: ProdutoCreateComponent
  },
  {
    path: ':id/delete',
    component: ProdutoDeleteComponent
  },
  {
    path: ':id/update',
    component: ProdutoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
