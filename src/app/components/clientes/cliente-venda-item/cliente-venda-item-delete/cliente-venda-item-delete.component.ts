import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurrencyService } from 'src/app/components/shared/service/currency.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaItemCreateComponent } from '../cliente-venda-item-create/cliente-venda-item-create.component';
import { ClienteVendaItem } from '../model/cliente-venda-item.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';

@Component({
  selector: 'app-cliente-venda-item-delete',
  templateUrl: './cliente-venda-item-delete.component.html',
  styleUrls: ['./cliente-venda-item-delete.component.css']
})
export class ClienteVendaItemDeleteComponent implements OnInit {

  clienteVendaItem: ClienteVendaItem = {
    id: 0,
    produtoCodigo: '',
    quantidade: 0,
    valorUnitario: 0,
    dataCriacao: 0,
    dataAtualizacao: 0,
    tamanho: 0
  }

  selected = {
    valorUnitario: ''
  }

  constructor(private clienteVendaItemService: ClienteVendaItemService,
    private messageService: MessageService,
    private currencyService: CurrencyService,
    public dialogRef: MatDialogRef<ClienteVendaItemCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public param: any) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteVendaItemService.readById(this.param.clienteId, this.param.vendaId, this.param.itemId).subscribe(item => {
      this.clienteVendaItem = item
      this.selected.valorUnitario = this.currencyService.convertFromNumberToInput(this.clienteVendaItem.valorUnitario)
    })
  }

  delete(): void{
    this.clienteVendaItemService.delete(this.param.clienteId, this.param.vendaId, this.clienteVendaItem.id + '').subscribe(() => {
      this.messageService.showMessage('Item removido com sucesso')
      this.dialogRef.close();
    })

  }

}
