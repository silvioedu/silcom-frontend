import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PipeModule } from 'src/app/components/shared/pipe/pipe.module';

import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './produto-delete/produto-delete.component';
import { ProdutoReadComponent } from './produto-read/produto-read.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';


@NgModule({
  declarations: [
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    PipeModule
  ]
})
export class ProdutoModule { }
