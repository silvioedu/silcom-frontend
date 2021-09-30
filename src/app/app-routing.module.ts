import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'cadastros',
    children: [
      {
        path: 'ramos',
        loadChildren: () => import('./components/cadastros/ramo/ramo.module').then(m => m.RamoModule)
      },
      {
        path: 'contatos-tipos',
        loadChildren: () => import('./components/cadastros/contato-tipo/contato-tipo.module').then(m => m.ContatoTipoModule)
      },
      {
        path: 'documentos-tipos',
        loadChildren: () => import('./components/cadastros/documento-tipo/documento-tipo.module').then(m => m.DocumentoTipoModule)
      },
      {
        path: 'formas-pagamentos-tipos',
        loadChildren: () => import('./components/cadastros/forma-pagamento-tipo/forma-pagamento-tipo.module').then(m => m.FormaPagamentoTipoModule)
      },
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: () => import('./components/cadastros/produto/produto/produto.module').then(m => m.ProdutoModule)
          },
          {
            path: 'complementos',
            loadChildren: () => import('./components/cadastros/produto/produto-complemento/produto-complemento.module').then(m => m.ProdutoComplementoModule)
          },
          {
            path: 'cores',
            loadChildren: () => import('./components/cadastros/produto/produto-cor/produto-cor.module').then(m => m.ProdutoCorModule)
          },
          {
            path: 'detalhes',
            loadChildren: () => import('./components/cadastros/produto/produto-detalhe/produto-detalhe.module').then(m => m.ProdutoDetalheModule)
          },
          {
            path: 'fabricantes',
            loadChildren: () => import('./components/cadastros/produto/produto-fabricante/produto-fabricante.module').then(m => m.ProdutoFabricanteModule)
          },
          {
            path: 'tipos',
            loadChildren: () => import('./components/cadastros/produto/produto-tipo/produto-tipo.module').then(m => m.ProdutoTipoModule)
          },
        ]
      },

    ]
  },
  {
    path: 'clientes',
    children: [
      {
        path: '',
        loadChildren: () => import('./components/clientes/cliente/cliente.module').then(m => m.ClienteModule)
      },
      {
        path: ':clienteId',
        children: [
          {
            path: 'contatos',
            loadChildren: () => import('./components/clientes/cliente-contato/cliente-contato.module').then(m => m.ClienteContatoModule)
          },
          {
            path: 'documentos',
            loadChildren: () => import('./components/clientes/cliente-documento/cliente-documento.module').then(m => m.ClienteDocumentoModule)
          },
          {
            path: 'enderecos',
            loadChildren: () => import('./components/clientes/cliente-endereco/cliente-endereco.module').then(m => m.ClienteEnderecoModule)
          },
          {
            path: 'vendas',
            children: [
              {
                path: '',
                loadChildren: () => import('./components/clientes/cliente-venda/cliente-venda.module').then(m => m.ClienteVendaModule)
              }
            ]
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
