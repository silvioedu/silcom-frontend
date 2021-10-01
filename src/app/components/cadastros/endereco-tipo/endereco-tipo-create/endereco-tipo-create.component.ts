import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/components/shared/service/message.service';
import { EnderecoTipoInput } from '../model/endereco-tipo-input.model';
import { EnderecoTipoService } from '../service/endereco-tipo.service';

@Component({
  selector: 'app-endereco-tipo-create',
  templateUrl: './endereco-tipo-create.component.html',
  styleUrls: ['./endereco-tipo-create.component.css']
})
export class EnderecoTipoCreateComponent implements OnInit {

  enderecoTipo: EnderecoTipoInput = {
    nome: ''
  }

  constructor(private enderecoTipoService: EnderecoTipoService,
    private router: Router,
    private messageService: MessageService) {
      // intentionally unscoped
  }

  ngOnInit(): void {
    // intentionally unscoped
  }

  create(): void{
    this.enderecoTipoService.create(this.enderecoTipo).subscribe(() => {
      this.messageService.showMessage('Tipo de endereço criado com sucesso')
      this.router.navigate(['cadastros/enderecos-tipos'])
    })
  }

  cancel(): void{
    this.router.navigate(['cadastros/enderecos-tipos'])
  }

}
