import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVenda } from '../model/cliente-venda.model';
import { ClienteVendaService } from '../service/cliente-venda.service';

@Component({
  selector: 'app-cliente-venda-delete',
  templateUrl: './cliente-venda-delete.component.html',
  styleUrls: ['./cliente-venda-delete.component.css']
})
export class ClienteVendaDeleteComponent implements OnInit {

  clienteVenda: ClienteVenda = {
    id: 0,
    formaPagamentoTipoNome: '',
    desconto: 0,
    agravo: 0,
    valorTotal: 0,
    emitirNota: false,
    observacoes: '',
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  private clienteId = ''
  private id = ''

  constructor(private clienteVendaService: ClienteVendaService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.id = this.route.snapshot.paramMap.get('id') as string

    this.clienteVendaService.readById(this.clienteId, this.id).subscribe(clienteVenda => {
      this.clienteVenda = clienteVenda
    })
  }

  delete(): void {
    this.clienteVendaService.delete(this.clienteId, this.id).subscribe(() => {
      this.messageService.showMessage("Venda do cliente deletada com sucesso.")
      const uri = `clientes/vendas/${this.clienteId}`
      this.router.navigate([uri])
    })
  }

  cancel(): void {
    const uri = `clientes/vendas/${this.clienteId}`
    this.router.navigate([uri])
  }

}
