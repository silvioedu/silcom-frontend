import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { FormaPagamentoTipoInput } from '../model/forma-pagamento-tipo-input.model';
import { FormaPagamentoTipoService } from '../service/forma-pagamento-tipo.service';

@Component({
  selector: 'app-forma-pagamento-tipo-create',
  templateUrl: './forma-pagamento-tipo-create.component.html',
  styleUrls: ['./forma-pagamento-tipo-create.component.css']
})
export class FormaPagamentoTipoCreateComponent implements OnInit {

  formaPagamentoTipo: FormaPagamentoTipoInput = {
    nome: '',
    desconto: 0,
    agravo: 0
  }

  constructor(private formaPagamentoTipoService: FormaPagamentoTipoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.formaPagamentoTipoService.create(this.formaPagamentoTipo).subscribe(() => {
      this.messageService.showMessage('Tipo de forma de pagamento criado com sucesso')
      this.router.navigate(['cadastros/formas-pagamentos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/formas-pagamentos-tipos'])
  }


}
