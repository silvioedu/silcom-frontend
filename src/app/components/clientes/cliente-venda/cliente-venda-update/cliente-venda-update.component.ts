import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormaPagamentoTipo } from 'src/app/components/cadastros/forma-pagamento-tipo/model/forma-pagamento-tipo.model';
import { FormaPagamentoTipoService } from 'src/app/components/cadastros/forma-pagamento-tipo/service/forma-pagamento-tipo.service';
import { CurrencyService } from 'src/app/components/shared/service/currency.service';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { ClienteVendaItemService } from '../../cliente-venda-item/service/cliente-venda-item.service';
import { ClienteVendaInput } from '../model/cliente-venda-input.model';
import { VendaStatus } from '../model/venda-status.enum';
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
  vendaId = '';
  dataCriacao:number = 0;
  status:string = '';

  formaPagamentoTipos: FormaPagamentoTipo[] = [];

  selected = {
    formaPagamentoTipo: 0,
    valorTotal: ''
  }

  constructor(private formaPagamentoTipoService: FormaPagamentoTipoService,
    private clienteVendaService: ClienteVendaService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private currencyService: CurrencyService) {
      // intentionally unscoped
  }

  async ngOnInit() {
    this.clienteId = this.route.snapshot.paramMap.get('clienteId') as string
    this.vendaId = this.route.snapshot.paramMap.get('vendaId') as string

    await this.preLoad()
    this.refresh()

    ClienteVendaItemService.clienteVendaItemEvent.subscribe(_ => this.refresh())

  }

  async preLoad() {
    this.formaPagamentoTipos = await this.formaPagamentoTipoService.read().toPromise();
  }

  update(): void{
    this.clienteVenda.formaPagamentoTipoId = this.selected.formaPagamentoTipo
    this.clienteVenda.valorTotal = this.currencyService.convertFromInputToNumber(this.selected.valorTotal)

    this.clienteVendaService.update(this.clienteId, this.vendaId, this.clienteVenda).subscribe(() => {
      this.messageService.showMessage("Venda do cliente atualizada com sucesso.")
      const uri = `clientes/${this.clienteId}/vendas`
      this.router.navigate([uri])
    })
  }

  cancel(): void{
    const uri = `clientes/${this.clienteId}/vendas`
    this.router.navigate([uri])
  }

  refresh(){
    this.clienteVendaService.readById(this.clienteId, this.vendaId).subscribe(clienteVenda => {
      this.clienteVenda = {
        formaPagamentoTipoId: this.formaPagamentoTipos.find(r => r.nome === clienteVenda.formaPagamentoTipoNome)?.id || 0,
        desconto: clienteVenda.desconto,
        agravo: clienteVenda.agravo,
        valorTotal: clienteVenda.valorTotal,
        emitirNota: clienteVenda.emitirNota,
        observacoes: clienteVenda.observacoes
      }

      this.dataCriacao = clienteVenda.dataCriacao
      this.status = clienteVenda.status

      this.selected = {
        formaPagamentoTipo: this.clienteVenda.formaPagamentoTipoId,
        valorTotal: this.currencyService.convertFromNumberToInput(this.clienteVenda.valorTotal)
      }
    })

  }

  updateStatusFechado() {
    this.updateStatus(VendaStatus.FECHADO)
  }

  updateStatusEntregue() {
    this.updateStatus(VendaStatus.ENTREGUE)
  }

  updateStatusCancelado() {
    this.updateStatus(VendaStatus.CANCELADO)
  }

  private updateStatus(status: VendaStatus) {
    this.clienteVendaService.updateStatus(this.clienteId, this.vendaId, status).subscribe(() => {
      this.messageService.showMessage("Status atualizado com sucesso.")
      this.refresh()
    })
  }
}
