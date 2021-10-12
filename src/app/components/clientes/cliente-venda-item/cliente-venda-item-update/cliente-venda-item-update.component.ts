import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoResumo } from 'src/app/components/cadastros/produto/produto/model/produto-resumo.model';
import { ProdutoService } from 'src/app/components/cadastros/produto/produto/service/produto.service';
import { CurrencyService } from 'src/app/components/shared/service/currency.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaItemCreateComponent } from '../cliente-venda-item-create/cliente-venda-item-create.component';
import { ClienteVendaItemInput } from '../model/cliente-venda-item-input.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';

@Component({
  selector: 'app-cliente-venda-item-update',
  templateUrl: './cliente-venda-item-update.component.html',
  styleUrls: ['./cliente-venda-item-update.component.css']
})
export class ClienteVendaItemUpdateComponent implements OnInit {

  clienteVendaItem: ClienteVendaItemInput = {
    produtoId: 0,
    quantidade: 0,
    valorUnitario: 0,
    tamanho: 0
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

  async ngOnInit() {
    await this.preLoad()

    this.clienteVendaItemService.readById(this.param.clienteId, this.param.vendaId, this.param.itemId).subscribe(item => {
      this.clienteVendaItem = {
        produtoId: this.produtos.find(r => r.codigo === item.produtoCodigo)?.id || 0,
        tamanho: item.tamanho,
        quantidade: item.quantidade,
        valorUnitario: item.valorUnitario
      }

      this.selected.produtoId = this.clienteVendaItem.produtoId
      this.selected.valorUnitario = this.currencyService.convertFromNumberToInput(this.clienteVendaItem.valorUnitario)

    })

  }

  async preLoad() {
    this.produtos = await this.produtoService.read().toPromise();
  }

  update(): void{
    this.clienteVendaItem.produtoId = this.selected.produtoId
    this.clienteVendaItem.valorUnitario = this.currencyService.convertFromInputToNumber(this.selected.valorUnitario)

    this.clienteVendaItemService.update(this.param.clienteId, this.param.vendaId, this.param.itemId, this.clienteVendaItem).subscribe(() => {
      this.messageService.showMessage('Item atualizado com sucesso')
      this.dialogRef.close();
    })

  }

}
