import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoTipo } from 'src/app/components/cadastros/forma-pagamento-tipo/model/forma-pagamento-tipo.model';
import { FormaPagamentoTipoService } from 'src/app/components/cadastros/forma-pagamento-tipo/service/forma-pagamento-tipo.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaInput } from '../model/cliente-venda-input.model';
import { ClienteVendaService } from '../service/cliente-venda.service';

@Component({
  selector: 'app-cliente-venda-create',
  templateUrl: './cliente-venda-create.component.html',
  styleUrls: ['./cliente-venda-create.component.css']
})
export class ClienteVendaCreateComponent implements OnInit {

  clienteVenda: ClienteVendaInput = {
    formaPagamentoTipoId: 0,
    desconto: 0,
    agravo: 0,
    valorTotal: 0,
    emitirNota: false,
    observacoes: ''
  }

  formaPagamentoTipos: FormaPagamentoTipo[] = []
  private clienteId = '';

  selected = {
    formaPagamentoTipo: 0
  }

  constructor(private clienteVendaService: ClienteVendaService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private formaPagamentoTipoService: FormaPagamentoTipoService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string

    this.formaPagamentoTipoService.read().subscribe(formaPagamentoTipos => {
      this.formaPagamentoTipos = formaPagamentoTipos
    })
  }

  create(): void{
    this.clienteVenda.formaPagamentoTipoId = this.selected.formaPagamentoTipo

    this.clienteVendaService.create(this.clienteId, this.clienteVenda).subscribe(venda => {
      this.messageService.showMessage('Venda do cliente criada com sucesso')
      const uri = `clientes/${this.clienteId}/vendas/${venda.id}/update`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/${this.clienteId}/vendas`
    this.router.navigate([uri])
  }

}
