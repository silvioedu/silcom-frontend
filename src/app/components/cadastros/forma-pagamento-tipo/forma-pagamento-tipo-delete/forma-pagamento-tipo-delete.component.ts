import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { FormaPagamentoTipo } from '../model/forma-pagamento-tipo.model';
import { FormaPagamentoTipoService } from '../service/forma-pagamento-tipo.service';

@Component({
  selector: 'app-forma-pagamento-tipo-delete',
  templateUrl: './forma-pagamento-tipo-delete.component.html',
  styleUrls: ['./forma-pagamento-tipo-delete.component.css']
})
export class FormaPagamentoTipoDeleteComponent implements OnInit {

  formaPagamentoTipo: FormaPagamentoTipo = {
    id: 0,
    nome: '',
    desconto: 0,
    agravo: 0,
    dataCriacao: 0,
    dataAtualizacao: 0
  };

  constructor(private formaPagamentoTipoService: FormaPagamentoTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string
    this.formaPagamentoTipoService.readById(id).subscribe(formaPagamentoTipo => {
      this.formaPagamentoTipo = formaPagamentoTipo
    })
  }

  delete(): void {
    this.formaPagamentoTipoService.delete(this.formaPagamentoTipo.id + '').subscribe(() => {
      this.messageService.showMessage("Tipo de forma de pagamento deletado com sucesso.")
      this.router.navigate(['cadastros/formas-pagamentos-tipos'])
    })
  }

  cancel(): void {
    this.router.navigate(['cadastros/formas-pagamentos-tipos'])
  }

}
