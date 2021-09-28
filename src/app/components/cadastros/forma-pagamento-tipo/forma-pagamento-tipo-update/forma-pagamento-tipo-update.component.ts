import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { FormaPagamentoTipoInput } from '../model/forma-pagamento-tipo-input.model';
import { FormaPagamentoTipoService } from '../service/forma-pagamento-tipo.service';

@Component({
  selector: 'app-forma-pagamento-tipo-update',
  templateUrl: './forma-pagamento-tipo-update.component.html',
  styleUrls: ['./forma-pagamento-tipo-update.component.css']
})
export class FormaPagamentoTipoUpdateComponent implements OnInit {

  formaPagamentoTipo: FormaPagamentoTipoInput = {
    nome: '',
    desconto: 0,
    agravo: 0
  };

  id = '';

  constructor(private formaPagamentoTipoService: FormaPagamentoTipoService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')  as string
    this.formaPagamentoTipoService.readById(this.id).subscribe(formaPagamentoTipo => {
      this.formaPagamentoTipo = formaPagamentoTipo
    })
  }

  update(): void{
    this.formaPagamentoTipoService.update(this.id, this.formaPagamentoTipo).subscribe(() => {
      this.messageService.showMessage("Tipo de forma de pagamento atualizado com sucesso.")
      this.router.navigate(['cadastros/formas-pagamentos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/formas-pagamentos-tipos'])
  }

}
