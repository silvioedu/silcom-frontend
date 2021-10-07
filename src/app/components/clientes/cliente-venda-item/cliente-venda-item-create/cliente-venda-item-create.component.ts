import { Component, Inject, OnInit } from '@angular/core';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaItemInput } from '../model/cliente-venda-item-input.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';
import { ProdutoResumo } from 'src/app/components/cadastros/produto/produto/model/produto-resumo.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/components/cadastros/produto/produto/service/produto.service';
import { CurrencyService } from 'src/app/components/shared/service/currency.service';

@Component({
  selector: 'app-cliente-venda-item-create',
  templateUrl: './cliente-venda-item-create.component.html',
  styleUrls: ['./cliente-venda-item-create.component.css']
})
export class ClienteVendaItemCreateComponent implements OnInit {

  clienteVendaItem: ClienteVendaItemInput = {
    produtoId: 0,
    quantidade: 0,
    valorUnitario: 0
  }

  produtos: ProdutoResumo[] = []

  selected = {
    produtoId: 0,
    valorUnitario: 'R$ 0,00'
  }

  constructor(private clienteVendaItemService: ClienteVendaItemService,
    private produtoService: ProdutoService,
    private messageService: MessageService,
    private currencyService: CurrencyService,
    public dialogRef: MatDialogRef<ClienteVendaItemCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  create(): void{
    this.clienteVendaItem.produtoId = this.selected.produtoId
    this.clienteVendaItem.valorUnitario = this.currencyService.convertFromInputToNumber(this.selected.valorUnitario)

    this.clienteVendaItemService.create(this.param.clienteId, this.param.vendaId, this.clienteVendaItem).subscribe(() => {
      this.messageService.showMessage('Item adicionado com sucesso')
      this.dialogRef.close();
    })

  }

}
