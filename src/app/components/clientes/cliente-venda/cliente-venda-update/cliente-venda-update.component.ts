import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormaPagamentoTipo } from 'src/app/components/cadastros/forma-pagamento-tipo/model/forma-pagamento-tipo.model';
import { FormaPagamentoTipoService } from 'src/app/components/cadastros/forma-pagamento-tipo/service/forma-pagamento-tipo.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaInput } from '../model/cliente-venda-input.model';
import { ClienteVendaService } from '../service/cliente-venda.service';

@Component({
  selector: 'app-cliente-venda-update',
  templateUrl: './cliente-venda-update.component.html',
  styleUrls: ['./cliente-venda-update.component.css']
})
export class ClienteVendaUpdateComponent implements OnInit {

  clienteVenda: ClienteVendaInput = {
    formaPagamentoTipoId: 0,
    desconto: 0,
    agravo: 0,
    valorTotal: 0,
    emitirNota: false,
    observacoes: ''
  }

  clienteId = '';
  id = '';

  formaPagamentoTipos: FormaPagamentoTipo[] = [];

  selected = {
    formaPagamentoTipo: 0,
    valorTotal: ''
  }

  constructor(private formaPagamentoTipoService: FormaPagamentoTipoService,
    private clienteVendaService: ClienteVendaService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.id = this.route.snapshot.paramMap.get('id') as string

    this.formaPagamentoTipoService.read().subscribe(formaPagamentoTipos => {
      this.formaPagamentoTipos = formaPagamentoTipos
    })

    this.clienteVendaService.readById(this.clienteId, this.id).subscribe(clienteVenda => {
      this.clienteVenda = {
        formaPagamentoTipoId: this.formaPagamentoTipos.find(r => r.nome === clienteVenda.formaPagamentoTipoNome)?.id || 0,
        desconto: clienteVenda.desconto,
        agravo: clienteVenda.agravo,
        valorTotal: clienteVenda.valorTotal,
        emitirNota: clienteVenda.emitirNota,
        observacoes: clienteVenda.observacoes
      }

      this.selected = {
        formaPagamentoTipo: this.clienteVenda.formaPagamentoTipoId,
        valorTotal: `R$ ${this.clienteVenda.valorTotal.toFixed(2).toString().replace(".",",")}`
      }
    })

  }

  update(): void{
    this.clienteVenda.formaPagamentoTipoId = this.selected.formaPagamentoTipo
    this.clienteVenda.valorTotal = parseFloat(this.selected.valorTotal.replace(",",".").replace(/R\$/gi,''))

    this.clienteVendaService.update(this.clienteId, this.id, this.clienteVenda).subscribe(() => {
      this.messageService.showMessage("Venda do cliente atualizada com sucesso.")
      const uri = `clientes/vendas/${this.clienteId}`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/vendas/${this.clienteId}`
    this.router.navigate([uri])
}

}
