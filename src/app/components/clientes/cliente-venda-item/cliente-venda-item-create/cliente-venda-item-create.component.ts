import { ProdutoService } from './../../../cadastros/produto/produto/service/produto.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaItemInput } from '../model/cliente-venda-item-input.model';
import { ClienteVendaItemService } from '../service/cliente-venda-item.service';
import { ProdutoResumo } from 'src/app/components/cadastros/produto/produto/model/produto-resumo.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-venda-item-create',
  templateUrl: './cliente-venda-item-create.component.html',
  styleUrls: ['./cliente-venda-item-create.component.css']
})
export class ClienteVendaItemCreateComponent implements OnInit {

  // clienteVendaItem: ClienteVendaItemInput = {
  //   produtoId: 0,
  //   quantidade: 0,
  //   valorUnitario: 0
  // }

  produtos: ProdutoResumo[] = []

  selected = {
    produtoId: 0,
    valorUnitario: ''
  }

  constructor(private clienteVendaItemService: ClienteVendaItemService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<ClienteVendaItemCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteVendaItemInput) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  create(): void{
    this.data.valorUnitario = parseFloat(this.selected.valorUnitario.replace(",",".").replace(/R\$/gi,''))

    console.log(this.data)
    // this.clienteVendaItemService.create(clienteId, vendaId, this.clienteVendaItem).subscribe(() => {
    //   this.messageService.showMessage('Item adicionado com sucesso')
    //   // this.router.navigate(['cadastros/clienteVendaItems'])
    // })
  }

  onNoClick(): void {
    this.data.valorUnitario = parseFloat(this.selected.valorUnitario.replace(",",".").replace(/R\$/gi,''))

    this.dialogRef.close();
  }

}
